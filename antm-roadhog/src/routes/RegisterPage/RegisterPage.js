import { connect } from 'dva';
import { Flex, List, InputItem } from 'antd-mobile';
import { Link } from 'dva/router';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import { createForm } from 'rc-form';

import MainLayout from '../../components/MainLayout/MainLayout';

import styles from './RegisterPage.less';

const RegisterPage = ({
	dispatch,
	form:{
		getFieldsError,
		getFieldError,
        getFieldDecorator,
        getFieldProps,
        validateFields,
    }
}) => {
	
	function registerSubmit(e){
		e.preventDefault();
		validateFields((error, values) => {
            if (!error) {
            	const { username, password } = values;
            	dispatch({type: 'app/register', payload: { username, password }});
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
	
	return (
		<MainLayout hasStyle={{background: '#eee'}}>
			<div className={styles.register_box}>
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
				<div className={styles.btn_box}>
					<a className={ styles.btn_register } onClick={registerSubmit}>注册</a>
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
})(createForm()(RegisterPage));