import { connect } from 'dva';
import { Flex, WhiteSpace, InputItem, Toast } from 'antd-mobile';
import { Link } from 'dva/router';
import MainLayout from '../../components/MainLayout/MainLayout';

import { createForm } from 'rc-form';

import styles from './FcodePage.less';

class FcodePage extends React.Component{
	constructor(props){
		super(props);
	}
	
	fcodeSubmit(){
		const that = this;
		const { dispatch } = that.props;
		const { getFieldError, validateFields } = that.props.form;
		validateFields((error, values) => {
			if(!error){
				const { fcode } = values;
				dispatch({
					type: 'fcode/fetchFcode',
					payload: { fcode },
					onComplete: function(state, msg){
						Toast.info(msg);
						if(state == 'success'){
							that.fcodeInput.clearInput();
						}
					}
				});
			}
			else{
				Toast.info(getFieldError('fcode')[0]);	
			}
		});
	}
	
	render(){
		const { getFieldError, getFieldProps } = this.props.form;
		
		return (
			<MainLayout hasFooter={false}>
				<div className={styles.code_box}>
					<InputItem
						className={styles.ui_input}
						type="text"
						placeholder="请输入任意产品F码"
						{...getFieldProps('fcode', {
							validate: [{
								trigger: 'onChange',
								rules: [
									{ required: true, message: '请输入f码领取' }
								]
							}]
						})}
						ref={(finput) => { this.fcodeInput = finput; }}
					/>
				</div>
				<div className={styles.notic}>
					<div className={styles.notic_name}>F码就是朋友特权</div>
					<div className={styles.notic_content}>
						F码是产品优先购买码，无需预约排队，直接购买热门商品。F = Friend，它是好朋友提供的“友情特权”。部分商品的特权购买，无法保证7天内发货。
					</div>
				</div>
				<footer className={styles.fcode_bottom}>
					<a className={ !!getFieldError('fcode') ? styles.fcode_button_disable : '' } onClick={(e) => { this.fcodeSubmit(); }}>
						提交
					</a>
				</footer>
			</MainLayout>
		);
	}
}

export default connect()(createForm()(FcodePage));
