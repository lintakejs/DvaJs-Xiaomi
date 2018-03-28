import React, {PropTypes} from 'react';
import {connect} from 'dva';
import { Flex, NavBar, Icon } from 'antd-mobile';
import Loading from '../components/Loading/Loading';
import ComNavBar from '../components/ComNavBar/ComNavBar';
import ComTabBar from '../components/ComTabBar/ComTabBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './App.less';

const App = ({
    children,
    loading,
    hasHeader,
    headerContent,
    hasFooter,
    footSelect,
    needBack,
    needSearch,
	animateCls,
	isLogin,
	...props,
}) => {
	let pathname = props.location.pathname;
	let content = loading ?　<Loading /> : '';
	
	const comNavState = {
		needBack,
		needSearch,
	};
	let comnavbar = hasHeader && headerContent != '' ?　(<ComNavBar {...comNavState}>{ headerContent }</ComNavBar>) : '';
	
	const comtabState = {
		selectedTab: footSelect,
		isLogin: isLogin,
	};
	
	let Comtab = hasFooter ? (<ComTabBar {...comtabState} />) : '';
	return (
		<div className="app_shell">
			{content}
			<ReactCSSTransitionGroup
				className="app_shell_header"
				transitionName="slide-down"
				component="header"
				transitionEnterTimeout={400}
		        transitionLeaveTimeout={400}
			>
				{comnavbar}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
				className="app_wrapper_view"
				transitionName={animateCls}
				component="div"
				transitionEnterTimeout={400}
		        transitionLeaveTimeout={400}
			>
				{React.cloneElement(children, {
					key: pathname
                })}
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
				className="app_shell_footer"
				transitionName="slide-up"
				component="footer"
				transitionEnterTimeout={400}
		        transitionLeaveTimeout={400}
			>
				{Comtab}
			</ReactCSSTransitionGroup>
		</div>
	)
};

App.propTypes = {
    children: PropTypes.element.isRequired,
};

export default connect((state, ownProps) => {
    return {
        loading: state.loading.global,
        hasHeader: state.appView.hasHeader,
        hasFooter: state.appView.hasFooter,
        headerContent: state.appView.headerContent,
        footSelect: state.appView.footSelect,
        needBack: state.appView.needBack,
        needSearch: state.appView.needSearch,
        animateCls: state.appView.animateCls,
        isLogin: state.app.isLogin,
    };
})(App);