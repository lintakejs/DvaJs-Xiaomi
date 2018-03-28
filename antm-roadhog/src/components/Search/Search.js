import TweenOne from 'rc-tween-one';
import React from 'react';
import { Icon } from 'antd-mobile';
import CustomIcon from '../CustomIcon/CustomIcon';
import { Toast } from 'antd-mobile';

import styles from './Search.less';

class Search extends React.Component{
	constructor(props) {
    	super(props);
    	this.moment = null;
    	this.animation = { left: '0%', duration: 100 };
    	this.state = {
      		moment: null,
      		paused: true,
      		reverse: false,
    	};
  	}
	/*动画属性改变*/
	onBackClick = () => {
		if(this.props.onBackClick){
			this.props.onBackClick();
		}
	}
	componentDidUpdate(){
		if(this.props.open){
			this.refs.searchInput.focus();
			this.refs.searchInput.value = '';
		}
	}
	onSearch = () => {
		Toast.info('此功能还在开发当中!~');
	}
  	render(){
  		let props = this.props;
  		let openStyle = this.props.open ? { left: '0' } : {};
  		return (
  			<TweenOne 
  				className={styles.search} 
  				style={openStyle}
  				animation={this.animation}
  				paused={this.state.paused}
		        reverse={this.state.reverse}
		        moment={this.state.moment}
  			>
  				<div className={styles.search_hd}>
  					<div className={styles.search_back}>
  						<Icon type="left" onClick={this.onBackClick} />
  					</div>
  					<div className={styles.search_wrapper}>
  						<div className={styles.search_wrapper_search}>
  							<CustomIcon type={require('../../svg/search.svg')} />
  						</div>
  						<input ref="searchInput" className={styles.search_wrapper_input} type="text" placeholder="请输入关键字" />
  					</div>
  					<a className={styles.search_wrapper_right} onClick={this.onSearch}>搜索</a>
  				</div>
  				<div className={styles.search_recomend}>
  					<h2 className={styles.search_recomend_title}>热门搜索</h2>
  					<nav className={styles.search_recomend_list}>
  						<a>毛巾</a>
  						<a>淋浴器</a>
  						<a>浴室柜</a>
  						<a>龙头</a>
  						<a>按摩仪</a>
  						<a>餐桌</a>
  						<a>橱柜</a>
  					</nav>
  				</div>
  			</TweenOne>
  		);
  	}
};

Search.propTypes = {
	open: React.PropTypes.bool,
};

export default Search;