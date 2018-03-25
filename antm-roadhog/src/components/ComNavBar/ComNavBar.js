import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import { routerRedux } from 'dva/router';

const ComNavBar = ({
	children,
	dispatch,
	needBack,
	needSearch,
}) => {
	return (
		<NavBar
			style={{background: '#f2f2f2'}}
			mode="light"
	      	icon={ needBack ? <Icon type="left" /> : ''}
	      	onLeftClick={() => { dispatch(routerRedux.goBack());}}
	      	rightContent={ needSearch ? [
	        	<Icon key="0" type="search" />,
	      	] : ''}
	    >{children}</NavBar>
	);
}

export default connect()(ComNavBar);