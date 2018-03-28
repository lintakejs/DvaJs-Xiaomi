import { connect } from 'dva';
import { Flex, Modal, Button, Tabs, } from 'antd-mobile';
import { Link, routerRedux, } from 'dva/router';
import ComSwiper from '../../../components/ComSwiper/ComSwiper';
import ComShopNumber from '../../../components/ComShopNumber/ComShopNumber';
import ImgLazy from '../../../components/ImgLazy/ImgLazy';
import RecommendList from '../../../components/RecommendList/RecommendList';

import MainLayout from '../../../components/MainLayout/MainLayout';

import styles from './detailPage.less';

class detailPage extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			modalOpen: false,
			modelContent: '',
			selectGoodsId: this.props.select_goods.goods_id,
			selectNumber: this.props.select_goods.goods_number,
			descriptionTab: 0,
		};
	}
	
	goods_number_change(shopNumber){
		shopNumber = parseInt(shopNumber);
		if(shopNumber > 0){
			this.setState({
				selectNumber: shopNumber,
			});
		}
	}
	
	goods_info_search(goodsId){
		let that = this;
		const { goods_info } = that.props;
		let selectGoodsInfo = {};
		if(goodsId){
			goods_info.some((obj) => {
				selectGoodsInfo = obj;
				return obj.goods_id == goodsId;
			});
		}
		return selectGoodsInfo;
	}
	
	goods_info_modal_tmp(){
		let that = this;
		const { goods_info, buy_option } = that.props;
		const { selectGoodsId, selectNumber } = that.state;
		let selectGoodsInfo = that.goods_info_search(selectGoodsId);
		
		//初始化可以显示可选的规格
		buy_option.map((bitem, bindex) => {
			bitem.list.map((blitem, blindex) => {
				blitem.is_show = false;
			});
		});
		
		selectGoodsInfo.prop_list.map((sitem, sindex) => {
			goods_info.map((gitem, gindex) => {
				gitem.prop_list.map((gpitem, gpindex) => {
					if(gpitem.prop_cfg_id == sitem.prop_cfg_id && gpitem.prop_value_id == sitem.prop_value_id){
						gitem.prop_list.map((gpritem, gprindex) => {
							buy_option.map((bitem, bindex) => {
								if(bitem.prop_cfg_id == gpritem.prop_cfg_id){
									bitem.list.map((blitem, blindex) => {
										if(blitem.is_stock || blitem.prop_value_id == gpritem.prop_value_id){
											blitem.is_show = true
										}
									});
								}
							});
						})
					}
				});
			});
		});
		
		let modelContent = (
			<div className={styles.pop}>
				<div className={styles.close} onClick={this.closeModal.bind(this)}>
					<i className={`${styles.image_icons} ${styles.icon_close}`}></i>
				</div>
				<Flex className={styles.pro_info} align="center" justify="around">
					<div className={styles.product_img}><img src={selectGoodsInfo.image_url} /></div>
					<Flex align="start" className={styles.product_desc}>
						<div className={styles.price}>{selectGoodsInfo.pd_price}</div>
						<div className={styles.name}>{selectGoodsInfo.pd_name}</div>
					</Flex>
				</Flex>
				<div className={styles.max5}>
				{
					buy_option.map((bitem, bindex) => {
						return (
							<div className={styles.mt2x} key={bindex}>
								<div className={styles.option_title}>{bitem.name}</div>
								<Flex className={styles.options_group} align="center" justify="start" wrap="wrap">
									{
										bitem.list.map((blitem, blindex) => {
											if(!blitem.is_show){
												return false;
											}
											let flexClass = `${styles.options_item}`;
											flexClass += bindex == 0 ? ` ${styles.line}` : '';
											selectGoodsInfo.prop_list.some((obj) => {
												if(obj.prop_cfg_id == bitem.prop_cfg_id && obj.prop_value_id == blitem.prop_value_id){
													flexClass += ` ${styles.on}`;
													return;
												}
											});
											return (
												<Flex 
													key={blindex} 
													className={flexClass} 
													align="center" 
													justify={bindex == 0 ? "between" : "center"} 
													onClick={(e) => {that.goods_info_modal_change({prop_cfg_id: bitem.prop_cfg_id, prop_value_id: blitem.prop_value_id, });}}
												>
													<p>{blitem.name}</p>
													{ blitem.price ? (<p>{blitem.price}</p>) : '' }
												</Flex>
											)
										})
									}
								</Flex>
							</div>	
						)
					})
				}
					<Flex className={styles.pd32} align="center" justify="between">
						<div className={styles.option_title}>购买数量</div>
						<ComShopNumber inputNum={selectNumber} maxNum={parseInt(selectGoodsInfo.buy_limit)} subCallBack={this.goods_number_change.bind(this)} addCallBack={this.goods_number_change.bind(this)} />
					</Flex>
				</div>
				<div className={styles.btn_bottom}>
					<div className={styles.action_box}>
						<Button className={styles.buy_btn}>加入购物车</Button>
					</div>
				</div>
			</div>
		);
		
		return modelContent;
	}
	
	goods_info_modal_open(){
		let that = this;
		
		this.setState({
			modelContent: that.goods_info_modal_tmp(),
			modalOpen: true,
		});
	}
	
	goods_info_modal_change(obj){
		let that = this;
		const { goods_info, buy_option, dispatch, } = that.props;
		const { selectGoodsId } = that.state;
		
		let selectGoodsPropList = that.goods_info_search(selectGoodsId).prop_list;
		let selectGoodsPropLength = selectGoodsPropList.length;
		
		let selectNewGoodsPropList = [];
		
		selectGoodsPropList.map((sitem, sindex) => {
			selectNewGoodsPropList.push({
				prop_cfg_id: sitem.prop_cfg_id,
				prop_value_id: sitem.prop_cfg_id == obj.prop_cfg_id ?　obj.prop_value_id : sitem.prop_value_id,
			});
		});
		
		let newSelGoodsInfo = {}; 
		goods_info.some((gitem) => {
			let eqNum = 0;
			gitem.prop_list.map((gpitem, gpindex) => {
				selectNewGoodsPropList.map((sitem, sindex) => {
					if(sitem.prop_cfg_id == gpitem.prop_cfg_id && sitem.prop_value_id == gpitem.prop_value_id){
						eqNum++;
					}
				});
			});
			if(eqNum == selectGoodsPropLength){
				newSelGoodsInfo = gitem;
				return;
			}
		});
		
		if(!newSelGoodsInfo.goods_id)
		{
			let stockPropList = [];
			selectNewGoodsPropList.map((newItem) => {
				buy_option.map((bitem) => {
					if(newItem.prop_cfg_id == bitem.prop_cfg_id){
						bitem.list.map((blitem) => {
							if(blitem.is_stock && blitem.prop_value_id == newItem.prop_value_id){
								stockPropList.push(newItem);
							}
						});
					}
				});
			});
			
			let stockPropListLength = stockPropList.length;

			goods_info.some((gitem) => {
				let eqNum = 0;
				gitem.prop_list.map((gpitem) => {
					stockPropList.map((sitem) => {
						if(sitem.prop_cfg_id == gpitem.prop_cfg_id && sitem.prop_value_id == gpitem.prop_value_id){
							eqNum++;
						}
					});
				});
				if(eqNum == stockPropListLength){
					newSelGoodsInfo = gitem;
					return;
				}
			});
		}
		
		that.setState({
			selectGoodsId: newSelGoodsInfo.goods_id,
		}, () => {
			that.setState({
				modelContent: that.goods_info_modal_tmp(),
			});
			
			dispatch({
				type: 'DetailPage/setTitleView',
				payload: {
					goodsInfo: newSelGoodsInfo
				}
			});
		});
	}
	
	showModal(e){
		if(e){
			e.preventDefault(); // 修复 Android 上点击穿透
		}
		this.setState({
			modalOpen: true,
		});
	}
	
	closeModal(){
		this.setState({
			modalOpen: false,
		});
	}
	
	changeDesc(tabOpt){
		const { descriptionTab } = this.state;
		if(tabOpt >= 0 && tabOpt != descriptionTab){
			this.setState({
				descriptionTab: tabOpt
			});
		}
	}
	
	render(){
		let that = this;
		const { modalOpen, modelContent, selectGoodsId, selectNumber, descriptionTab } = that.state;
		const { dispatch, viewContent, } = that.props;
		const { galleryView, titleView, descTabsView } = viewContent;
		const { pd_market_price, pd_name, pd_price, product_desc, canJoinActs } = titleView;
		
		let promotion = canJoinActs.length > 0 ? (
			<div className={styles.pd_section}>
				<Flex className={ canJoinActs.length > 1 ? `${styles.pd_section_box} ${styles.more}` : `${styles.pd_section_box}`} align="start" justify="start">
					<div className={styles.pd_section_title}>促销</div>
					<div className={styles.pd_section_content}>
					{
						canJoinActs.map((item, index) => {
							return (
								<Flex className={styles.pd_section_content_item} key={index} align="center" justify="start" wrap="wrap">
									<div className={styles.pd_section_icon_desc}>{item.type_desc}</div>
									<div className={styles.pd_section_icon_title}>{item.title}</div>
								</Flex>			
							);
						})
					}
					</div>
				</Flex>
			</div>
		) : '';
		
		return (
			<MainLayout hasHeader={false} hasFooter={true} hasStyle={{background: '#efefef'}}>
				<header className={styles.de_header}>
					<Flex className={styles.de_header_full} align="center">
						<a className={styles.header_btn} onClick={ (e) => { dispatch(routerRedux.goBack()); }}>
							<i className={styles.icon_back}></i>
						</a>
						<div className={styles.placeholder}></div>
						<a className={styles.header_btn}>
							<i className={styles.icon_share}></i>
						</a>
					</Flex>
				</header>
				<ComSwiper
					slideItem={galleryView} 
					className={styles.detail_sw}
					resistanceRatio={0}
				/>
				<div className={styles.overview}>
					<Flex className={styles.goods_name} align="center" justify="start">
						{pd_name}
					</Flex>
					<div className={styles.goods_brief} dangerouslySetInnerHTML={{__html: product_desc}}></div>
					<Flex className={styles.goods_price} align="end" justify="start">
						<p className={styles.cur_price}>{pd_price}</p>
						<p className={styles.origin_price}>{pd_market_price}</p>
					</Flex>
				</div>
				{promotion}
				<div className={`${styles.pd_section} ${styles.mt2x}`} onClick={that.goods_info_modal_open.bind(that)}>
					<Flex className={`${styles.pd_section_box} ${styles.more}`} align="start" justify="start">
						<div className={styles.pd_section_title}>已选</div>
						<div className={styles.pd_section_content}>
							<Flex className={styles.pd_section_content_item} align="center" justify="start">
								<div className={styles.pd_section_info}>{ that.goods_info_search(selectGoodsId).pd_name } { selectNumber > 0 ? `x${selectNumber}` : '' }</div>
							</Flex>
						</div>
					</Flex>
				</div>
				<div className={styles.description_view}>
					<Flex className={styles.description_tab_header} align="center">
						{
							descTabsView.map((desItem, desIndex) => {
								return (
									<a className={ desIndex == descriptionTab ? `${styles.on}` : '' } key={desIndex} onClick={(e) => { that.changeDesc(desIndex); }} >{desItem.name}</a>
								)
							})
						}
					</Flex>
					<div className={styles.description_tab_view}>
						{
							descTabsView.map((desItem, desIndex) => {
								return (
									<div key={desIndex} style={ desIndex != descriptionTab ? { display: 'none' } : {} }>
										{
											desItem.tabContent.map((tabcItem, tabcIndex) => {
												return (
													<ImgLazy beginLoad={ desIndex == descriptionTab ? true : false } key={tabcIndex} src={tabcItem} />
												)
											})
										}
									</div>
								)
							})
						}
					</div>
				</div>
				<RecommendList />
				<Flex className={styles.detail_footer} align="center">
					<Link className={styles.footer_btn} to="/">
						<i className={`${styles.image_icons} ${styles.icon_home}`}></i>
						<span>首页</span>
					</Link>
					<Link className={styles.footer_btn} to="/cart">
						<i className={`${styles.image_icons} ${styles.icon_shopcar}`}></i>
						<span>购物车</span>
					</Link>
					<div className={styles.action_btn} onClick={that.goods_info_modal_open.bind(that)}>
						<a className={styles.buy_btn}>加入购物车</a>
					</div>
				</Flex>
				<Modal 
					popup
					onClose={that.closeModal.bind(that)}
					visible={modalOpen}
					animationType="slide-up"
				>
					{modelContent}
				</Modal>
			</MainLayout>
		);
	}
}

export default connect((state, ownProps) => {
	return {
		select_goods: state.DetailPage.select_goods,
		buy_option: state.DetailPage.buy_option,
		goods_info: state.DetailPage.goods_info,
		viewContent: state.DetailPage.viewContent,
	};
})(detailPage);