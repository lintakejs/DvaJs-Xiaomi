import styles from './ComShopNumber.less';

class ComShopNumber extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			inputNum: this.props.inputNum,
		}
	}
	
	subNum = () => {
		const { minNum, subCallBack } = this.props;
		const { inputNum } = this.state;
		if(inputNum > minNum){
			this.setState({
				inputNum: inputNum-1,
			}, () => {
				if(subCallBack){
					subCallBack(this.state.inputNum);
				}
			});
		}
		else{
			if(subCallBack){
				subCallBack(inputNum);
			}
		}
	}
	
	addNum = () => {
		const { maxNum, addCallBack } = this.props;
		const { inputNum } = this.state;
		if(inputNum < maxNum){
			this.setState({
				inputNum: inputNum+1,
			}, () => {
				if(addCallBack){
					addCallBack(this.state.inputNum);
				}
			});
		}
		else{
			if(addCallBack){
				addCallBack(inputNum);
			}
		}
	}
	
	render(){
		const { className, minNum, maxNum } = this.props;
		const { inputNum } = this.state;
		return (
			<div className={ className ? `${styles.input_number} ${className}` : `${styles.input_number}` }>
				<div className={ inputNum <= minNum ? `${styles.input_sub}` : `${styles.input_sub} ${styles.active}`} onClick={this.subNum.bind(this)}>
					<i className={`${styles.image_icons} ${styles.icon_line}`}></i>
				</div>
				<div className={styles.input_num}>
					<span>{inputNum}</span>
				</div>
				<div className={ inputNum >= maxNum ? `${styles.input_add}` : `${styles.input_add} ${styles.active}`} onClick={this.addNum.bind(this)}>
					<i className={`${styles.image_icons} ${styles.icon_cross}`}></i>
				</div>
			</div>
		);
	}
}

ComShopNumber.propTypes = {
	className: React.PropTypes.string,
	minNum: React.PropTypes.number.isRequired,
	maxNum: React.PropTypes.number.isRequired,
	inputNum: React.PropTypes.number.isRequired,
	subCallBack: React.PropTypes.func,
	addCallBack: React.PropTypes.func,
};

ComShopNumber.defaultProps = {
	minNum: 1,
	maxNum: 99,
	inputNum: 1,
};

export default ComShopNumber;