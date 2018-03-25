import { connect } from 'dva';
import { Flex, NavBar, Icon } from 'antd-mobile';
import { Link } from 'dva/router';
import ImgLazy from '../../components/ImgLazy/ImgLazy';
import throttle from '../../utils/throttle';

import MainLayout from '../../components/MainLayout/MainLayout';

import styles from './ClassifiPage.less';

class ClassifiPage extends React.Component{
	constructor(props){
		super(props);
		
		this.scrollThrottle = function(){}
		this.listOffsetTop = [];
		
		this.state = {
			categoryCurrentId: this.props.categoryList[0].categoryid || '0',
		};
	}
	
	componentDidMount(){
		let that = this;
		const { categoryList } = that.props;
		let listW = that.listWrap;
		let listWChd = listW.children;
		let listWChdLength = listWChd.length;
		
		for(var i = 0; i < listWChdLength; i++){
			that.listOffsetTop.push(listWChd[i].offsetTop);
		}
		
		that.scrollThrottle = throttle(function(){
			var scrollTop = listW.scrollTop;
			for(var j = 0; j < listWChdLength; j++){
				if(j + 1 >= listWChdLength){
					that.categoryListClick(categoryList[j].categoryid);
					break;
				}
				else if(scrollTop >= that.listOffsetTop[j] && scrollTop < that.listOffsetTop[j+1]){
					that.categoryListClick(categoryList[j].categoryid);
					break;
				}
				else if(scrollTop < that.listOffsetTop[0]){
					that.categoryListClick(categoryList[0].categoryid);
					break;
				}
			}
		}, 100);
		
		listW.addEventListener('scroll', that.scrollThrottle);
	}
	
	componentWillUnmount(){
		this.listWrap.removeEventListener('scroll', this.scrollThrottle);
	}
	
	categoryListItem() {
		const { categoryList } = this.props;
		
		let categoryUl = this.categoryUl;
		let contentHeight = categoryUl.offsetHeight;
		let categoryChildren = categoryUl.children;
		let categoryLength = categoryList.length;
		
		let categoryAct = null;
		
		for(var i = 0; i < categoryLength; i++){
			if(categoryList[i].categoryid == this.state.categoryCurrentId){
				categoryAct = categoryChildren[i];
				break;
			}
		}
		
		categoryUl.scrollTo(0, categoryAct.offsetTop + categoryAct.offsetHeight - contentHeight);
	}
	
	categoryListClick(categoryid, scrollKey) {
		let that = this;
		that.setState({
			categoryCurrentId: categoryid,
		}, () => {
			that.categoryListItem();
			
			if(scrollKey >= 0){
				that.listWrap.scrollTo(0, that.listOffsetTop[scrollKey]);
			}
		});
	}
	
	render(){
		const { isLogin, categoryList } = this.props;
		const { categoryCurrentId } = this.state;
		
		const listItem = [0, 1, 2, 3, 4, 5];
		
		return (
			<MainLayout>
			    <div className={styles.list_navbar}>
			    	<ul ref={(ul) => { this.categoryUl = ul; }}>
			    		{
			    			categoryList.map((item, index) => {
			    				return (
			    					<li className={ item.categoryid == categoryCurrentId ? 'active' : '' } key={index} onClick={(e) => this.categoryListClick(item.categoryid, index)}>{item.categoryname}</li>
			    				)
			    			})
			    		}
			    	</ul>
			    </div>
			    <ul className={styles.list_wrap} ref={(ul) => { this.listWrap = ul; }}>
			    	{
			    		categoryList.map((item, index) => {
			    			return (
			    				<li key={index}>
						    		<Link to="/">
						    			<ImgLazy outSideBox={styles.list_wrap} src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/31a2edbc3186139d47d8ce8b7c25174b.jpg?thumb=1&w=500&h=200"/>
						    		</Link>
						    		<div className={styles.category_title}>
						    			<span>{item.categoryname}</span>
						    		</div>
						    		<Flex className={styles.category_group} wrap="wrap">
				    					{
				    						listItem.map((pditem, pdindex) => {
				    							return (
				    								<div className={styles.product} key={pdindex}>
					    								<Link to="/commodity/list/687">
								    						<div className={styles.img}>
								    							<ImgLazy outSideBox={styles.list_wrap} src="//i8.mifile.cn/b2c-mimall-media/dd2cdf91ccdadcbe9776050eebb5b437!120x120.png" />
								    						</div>
								    						<div className={styles.name}>
								    							{item.categoryname}
								    						</div>
								    					</Link>
							    					</div>
				    							)
				    						})
				    					}
						    		</Flex>
						    	</li>
			    			)
			    		})
			    	}
			    </ul>
			</MainLayout>
		)
	}
}

ClassifiPage.propTypes = {
	isLogin: React.PropTypes.bool.isRequired,
	categoryList: React.PropTypes.array.isRequired,
};

export default connect((state, ownProps) => {
    return {
    	isLogin: state.app.isLogin,
        categoryList: state.ClassifiPage.categoryList,
    };
})(ClassifiPage);