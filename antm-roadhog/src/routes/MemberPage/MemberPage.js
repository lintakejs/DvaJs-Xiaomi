import { connect } from 'dva';
import { Flex, WhiteSpace } from 'antd-mobile';
import { Link } from 'dva/router';
import MainLayout from '../../components/MainLayout/MainLayout';
import { routerRedux } from 'dva/router';
import styles from './MemberPage.less';
import userImg from "../../assets/user.png";

const MemberPage = ({
	dispatch,
    isLogin,
    account,
}) => {
	let userImgSrc = isLogin ? "//s1.mi.com/m/images/m/default.png" : userImg;
	let memberName = isLogin ? (
		<div className={styles.member_name}>
			<p>{account.nikeName}</p>
			<div className={styles.account}>{account.phone}</div>
		</div>
	) : (
		<Link className={styles.member_name} to="/login">
			登录/注册
		</Link>
	);
	
	return (
		<MainLayout hasHeader={false} hasStyle={{background: '#f5f5f5'}}>
			<header className={styles.member_hd}>
				<Flex onClick={(e) => { if(isLogin)return false; dispatch(routerRedux.push("/login")); }}>
					<div className={styles.member_img}>
						<img src={userImgSrc}/>
					</div>
					{memberName}
				</Flex>
			</header>
			<Flex justify="between" className={styles.b1}>
				<div className={styles.cite}>
					我的订单
				</div>
				<Flex className={styles.span}>
					<a>全部订单</a>
				</Flex>
			</Flex>
			<Flex justify="between" className={styles.b2}>
				<a className={styles.dfk}>
					<i className={styles.icon}></i>
					<span>待付款</span>
				</a>
				<a className={styles.dah}>
					<i className={styles.icon}></i>
					<span>待收货</span>
				</a>
				<a className={styles.thx}>
					<i className={styles.icon}></i>
					<span>退换修</span>
				</a>
			</Flex>
			<WhiteSpace className={styles.gery_line} />
			<ul className={styles.items}>
				<li className={styles.i_member}>
					<a>
						<span className={styles.cite}>会员福利</span>
					</a>
				</li>
				<li className={styles.i_wallet}>
					<a>
						<span className={styles.cite}>我的优惠</span>
					</a>
				</li>
			</ul>
			<WhiteSpace className={styles.gery_line} />
			<ul className={styles.items}>
				<li className={styles.i_service}>
					<a>
						<span className={styles.cite}>服务中心</span>
					</a>
				</li>
				<li className={styles.i_fcode}>
					<Link to="/fcode">
						<span className={styles.cite}>F码通道</span>
					</Link>
				</li>
			</ul>
			<WhiteSpace className={styles.gery_line} />
			<ul className={styles.items}>
				<li className={styles.i_set}>
					<Link to="/member/set">
						<span className={styles.cite}>设置</span>
					</Link>
				</li>
			</ul>
		</MainLayout>
	);
}

export default connect((state, ownProps) => {
    return {
        isLogin: state.app.isLogin,
        account: state.app.account,
    };
})(MemberPage);
