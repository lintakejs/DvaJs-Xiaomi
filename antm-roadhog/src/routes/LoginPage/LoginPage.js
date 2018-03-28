import { connect } from 'dva';
import { Flex, List, InputItem } from 'antd-mobile';
import { Link } from 'dva/router';
import CustomIcon from '../../components/CustomIcon/CustomIcon';

import MainLayout from '../../components/MainLayout/MainLayout';

import { createForm } from 'rc-form';

import styles from './LoginPage.less';

const LoginPage = ({
	dispatch,
	form:{
		getFieldsError,
		getFieldError,
        getFieldDecorator,
        getFieldProps,
        validateFields,
    }
}) => {
	function handleSubmit(e) {
        e.preventDefault();
        validateFields((error, values) => {
            if (!error) {
            	const {username, password} = values;
            	dispatch({type: 'app/auth', payload: {username, password}});
            }
        });
    }
	
	function phoneCheck(rule, value, callback){
		var reg = /^1[3|4|5|7|8]\d{9}$/;
		
		if(!reg.test(value)){
			callback([new Error('请输入正确的手机号')]);
		}
		else{
			callback();
		}
	}
	
	function errorPar() {
		var errorArray = getFieldsError(['username', 'password']);
		for(var x in errorArray){
			if(errorArray[x]){
				return errorArray[x];
			}
		}
	}
	const errorP = errorPar() || null;
	return (
		<MainLayout hasStyle={{background: '#eee'}}>
			<div className={styles.layout}>
				<div className={styles.logo_box}>
					<CustomIcon className={styles.solux_logo} type={require('../../svg/logo.svg')} />
					<h4 className={styles.header_tit_txt}>松霖帐号登录</h4>
				</div>
				<List>
					<InputItem
						type="text" 
						placeholder="手机号码"
						maxLength={11}
						{...getFieldProps('username', {
							validate:[
								{
									trigger: 'onChange',
									rules: [
										{ required: true, message: '请输入手机号' },
										{ validator: phoneCheck },
									]
								}
							],
						})}
						error={!!getFieldError('username')}
						clear
					/>
					<InputItem
						type="password" 
						placeholder="密码"
						{...getFieldProps('password', {
							validate:[
								{
									trigger: 'onChange',
									rules: [
										{ required: true, message: '请输入至少6位的密码' },
										{ min: 6, message: '请输入至少6位的密码' }
									]
								}
							]
						})}
						error={!!getFieldError('password')}
						clear
					/>
				</List>
				<p className={styles.error_txt}>{ errorP ? errorP[0] : null }</p>
				<div className={styles.btn_box}>
					<a className={styles.btn_login} onClick={handleSubmit}>登录</a>
					<Link to="/register" className={styles.btn_resiger}>注册</Link>
				</div>
				<div className={styles.total_tips}>
					由于是纯前端页面,故使用固定账户,<br/>
					一切数据均为模拟数据<br/>
					账号: 13999260121 <br/>
					密码: 123456
				</div>
			</div>
		</MainLayout>
	);
}

export default connect((state, ownProps) => {
    return {
        isLogin: state.app.isLogin,
        account: state.app.account,
    };
})(createForm()(LoginPage));