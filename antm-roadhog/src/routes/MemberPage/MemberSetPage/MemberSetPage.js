import { connect } from 'dva';
import { Flex, WhiteSpace } from 'antd-mobile';
import { Link } from 'dva/router';
import MainLayout from '../../../components/MainLayout/MainLayout';

import styles from './MemberSetPage.less';

const MemberSetPage = ({
	dispatch,
}) => {
	function logout(){
		dispatch({
			type: 'app/logout',
			payload: {},
		});
	}
	
	return (
		<MainLayout hasFooter={false}>
			<footer className={styles.member_set_footer}>
				<a onClick={(e) => { logout(); }}>
					退出账号
				</a>
			</footer>
		</MainLayout>
	);
}

export default connect()(MemberSetPage);