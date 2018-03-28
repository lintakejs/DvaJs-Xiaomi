import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import Search from '../Search/Search';

class ComNavBar extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	open: false,
	    };
	}
	onClick = () => {
	    this.setState({
	      	open: !this.state.open,
	    });
	}
	render(){
		const { children, dispatch, needBack, needSearch, } = this.props;
		return (
			<div>
				<NavBar
					style={{background: '#f2f2f2'}}
					mode="light"
			      	icon={ needBack ? <Icon type="left" /> : ''}
			      	onLeftClick={() => { dispatch(routerRedux.goBack());}}
			      	rightContent={ needSearch ? [
			        	<Icon key="0" type="search" onClick={this.onClick}/>,
			      	] : ''}
			    >{children}</NavBar>
			    <Search open={this.state.open} onBackClick={this.onClick.bind(this)} />
		    </div>
		);
	}
}

export default connect()(ComNavBar);