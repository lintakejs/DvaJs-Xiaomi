import { connect } from 'dva';
import { Flex, NavBar, Icon } from 'antd-mobile';
import { Link } from 'dva/router';
import RecommendList from '../../components/RecommendList/RecommendList';

import MainLayout from '../../components/MainLayout/MainLayout';

import styles from './CartPage.less';

const CartPage = ({
	isLogin,
    account,
}) => {
	return (
		<MainLayout>
		    <Link to="/login">
		    <Flex className={styles.no_login} align="center" justify="between">
		    	<span>登录后享受更多优惠</span>
		    	<em>去登录</em>
		    </Flex>
		    </Link>
		    <div className={styles.no_item}>
		    	<Link to="/">
		    		<span>购物车还是空的</span>
		    		<em>去逛逛</em>
		    	</Link>
		    </div>
		    <RecommendList />
		</MainLayout>
	);
}

export default connect((state, ownProps) => {
    return {
        isLogin: state.app.isLogin,
        account: state.app.account,
    };
})(CartPage);