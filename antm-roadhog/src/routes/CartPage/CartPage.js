import { connect } from 'dva';
import { Flex, NavBar, Icon } from 'antd-mobile';
import { Link } from 'dva/router';
import RecommendList from '../../components/RecommendList/RecommendList';
import ImgLazy from '../../components/ImgLazy/ImgLazy';
import ComShopNumber from '../../components/ComShopNumber/ComShopNumber';

import MainLayout from '../../components/MainLayout/MainLayout';

import styles from './CartPage.less';

const CartPage = ({
	dispatch,
	isLogin,
    account,
    ActTotalMoney,
    shopCartItems,
    totalSelGoods,
}) => {
	let showLogin = !isLogin ? (
		<Link to="/login">
		    <Flex className={styles.no_login} align="center" justify="between">
		    	<span>登录后享受更多优惠</span>
		    	<em>去登录</em>
		    </Flex>
		</Link>
	) : '';
	let shopcar = shopCartItems.length > 0 ? (
		<ol className={styles.cart_list}>
			{
				shopCartItems.map((scItem, scIndex) => {
					return (
						<li key={scIndex} className={styles.cart_list_item}>
							<Flex className={styles.cart_list_flex} align="center" justify="center">
								<div className={ scItem.sel_status ? `${styles.choose} ${styles.checked}` : `${styles.choose} ${styles.unchecked}` }></div>
								<Link className={styles.img_product} to={`/commodity/detail/${scItem.goodsId}`}>
									<ImgLazy src={scItem.image_url} />
								</Link>
								<div className={styles.info}>
									<p className={styles.name}>{scItem.product_name}</p>
									<div className={styles.price_without}>
										<span>售价：</span>
										<span>{scItem.price}元</span>
									</div>
									<div className={styles.num}>
										<ComShopNumber inputNum={scItem.num} maxNum={scItem.buy_limit} />
									</div>
								</div>
							</Flex>
						</li>
					)
				})
			}
		</ol>
	) : (
		<div className={styles.no_item}>
	    	<Link to="/">
	    		<span>购物车还是空的</span>
	    		<em>去逛逛</em>
	    	</Link>
	    </div>
	);
	
	let bottom_submit = shopCartItems.length > 0 ? (
		<Flex className={styles.bottom_submit}>
			<div className={styles.price_box}>
				<span>共{totalSelGoods}件 金额：</span>
				<br/>
				<strong>{ActTotalMoney}</strong>
				<span>元</span>
			</div>
			<Link to="/gallery" className={`${styles.btn} ${styles.disable}`}>
				继续购物
			</Link>
			<Link className={`${styles.btn}`} onClick={ (e) => { dispatch({ type: "ShopCar/Settlement" }); } }>
				去结算
			</Link>
		</Flex>
	) : '';
	
	return (
		<MainLayout>
		    {showLogin}
		    {shopcar}
		    <RecommendList />
		    {bottom_submit}
		</MainLayout>
	);
}

export default connect((state, ownProps) => {
    return {
        isLogin: state.app.isLogin,
        account: state.app.account,
        ActTotalMoney: state.ShopCar.ActTotalMoney,
        shopCartItems: state.ShopCar.items,
        totalSelGoods: state.ShopCar.totalSelGoods,
    };
})(CartPage);