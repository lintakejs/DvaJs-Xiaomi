import { connect } from 'dva';
import { Flex } from 'antd-mobile';
import { Link, routerRedux, } from 'dva/router';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import RecommendList from '../../components/RecommendList/RecommendList';

import MainLayout from '../../components/MainLayout/MainLayout';

import styles from './ListPage.less';

const ListPage = ({
	dispatch,
	commodityList,
}) => {
	return (
		<MainLayout>
			<ol>
			{
				commodityList.map((item, index) => {
					let icon_img = item.icon_img != "" ? (<span className={styles.item_img_span}><img src={item.icon_img} /></span>) : '';
					return (
						<li key={index} className={styles.item} onClick={ (e) => { dispatch(routerRedux.push(`/commodity/detail/${item.product_id}`)) }}>
							<div className={styles.item_img}>
								<img src={item.img_url} />
								{icon_img}
							</div>
							<Flex className={styles.item_intro}>
								<div className={styles.item_name}>{item.name}</div>
								<div className={styles.item_brief} dangerouslySetInnerHTML={{__html: item.product_desc}}></div>
								<div className={styles.item_intro_price}><span className={styles.price}>{item.price}</span></div>
							</Flex>
						</li>
					)
				})
			}
			</ol>
			<RecommendList />
		</MainLayout>
	)
}

export default connect((state, ownProps) => {
    return {
        commodityList: state.ListPage.commodityList,
    };
})(ListPage);