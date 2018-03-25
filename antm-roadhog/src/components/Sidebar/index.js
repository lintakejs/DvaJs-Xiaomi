import React from 'react';
import { List, Icon } from 'antd-mobile';
import './Sidebar.less';

const Sidebar = () => {
  	return (
    	<List className="drawer_sidebar">
     		<List.Item className="drawer_sidebar_first">
     			<a className="drawer_sidebar_selected drawer_sidebar_link">
     				<div className="drawer_sidebar_icon">
     					<Icon type={require('../../svg/drawerHomeSelect.svg')} />
     				</div>
     				首页
     			</a>
     			<a className="drawer_sidebar_link">
     				<div className="drawer_sidebar_icon">
     					<Icon type={require('../../svg/drawerHappybuy.svg')} />
     				</div>
     				松霖欢乐购
     			</a>
     			<a className="drawer_sidebar_link">
     				<div className="drawer_sidebar_icon">
     					<Icon type={require('../../svg/drawerLife.svg')} />
     				</div>
     				松霖生活
     			</a>
     			<a className="drawer_sidebar_link">
     				<div className="drawer_sidebar_icon">
     					<Icon type={require('../../svg/drawerMember.svg')} />
     				</div>
     				会员分享
     			</a>
     		</List.Item>
     		<List.Item>
     			<a className="drawer_sidebar_link">
	 				<div className="drawer_sidebar_icon">
	 					<Icon type={require('../../svg/drawerBoutique.svg')} />
	 				</div>
	 				家装精品
	 			</a>
	 			<nav className="drawer_sidebar_nav">
	 				<a>
	 					<div className="drawer_sidebar_icon">
	 						<Icon type={require('../../svg/drawerCate.svg')} />
	 					</div>
	 					品类
	 				</a>
	 				<a>
	 					<div className="drawer_sidebar_icon">
	 						<Icon type={require('../../svg/drawerSeries.svg')} />
	 					</div>
	 					系列
	 				</a>
	 				<a>
	 					<div className="drawer_sidebar_icon">
	 						<Icon type={require('../../svg/drawerWhole.svg')} />
	 					</div>
	 					全屋
	 				</a>
	 				<a>
	 					<div className="drawer_sidebar_icon">
	 						<Icon type={require('../../svg/drawerNew.svg')} />
	 					</div>
	 					精品
	 				</a>
	 			</nav>
	 			<a className="drawer_sidebar_link">
	 				<div className="drawer_sidebar_icon">
	 					<Icon type={require('../../svg/drawerLifeGoods.svg')} />
	 				</div>
	 				生活好物
	 			</a>
	 			<nav className="drawer_sidebar_nav">
	 				<a>
	 					<div className="drawer_sidebar_icon">
	 						<Icon type={require('../../svg/drawerCate.svg')} />
	 					</div>
	 					品类
	 				</a>
	 				<a>
	 					<div className="drawer_sidebar_icon">
	 						<Icon type={require('../../svg/drawerSeries2.svg')} />
	 					</div>
	 					系列
	 				</a>
	 				<a>
	 					<div className="drawer_sidebar_icon">
	 						<Icon type={require('../../svg/drawerSpecial.svg')} />
	 					</div>
	 					专题
	 				</a>
	 				<a>
	 					<div className="drawer_sidebar_icon">
	 						<Icon type={require('../../svg/drawerNew.svg')} />
	 					</div>
	 					精品
	 				</a>
	 			</nav>
     		</List.Item>
    	</List>
  	);
};

export default Sidebar;
