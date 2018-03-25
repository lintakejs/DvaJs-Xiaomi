import { TabBar } from 'antd-mobile';
import CustomIcon from '../CustomIcon/CustomIcon';

class ComTabBar extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		let props = this.props;
		let { selectedTab, isLogin } = props;
		
		let memberOrLogin = isLogin ? (
			<TabBar.Item
        		title="我的"
        		key="我的"
        		selected={ selectedTab === 3 }
        		onPress={() => {
        			if(selectedTab !== 3){
        				this.context.router.push('/member');
        			}
        		}}
        		icon={<CustomIcon type={require('../../svg/mine.svg')} />} 
        		selectedIcon={<CustomIcon type={require('../../svg/mineSelect.svg')} />}
        	/>
		) : (
			<TabBar.Item
        		title="登录"
        		key="登录"
        		selected={ selectedTab === 3 }
        		onPress={() => {
        			if(selectedTab !== 3){
        				this.context.router.push('/member');
        			}
        		}}
        		icon={<CustomIcon type={require('../../svg/mine.svg')} />} 
        		selectedIcon={<CustomIcon type={require('../../svg/mineSelect.svg')} />}
        	/>
		);
		return(
			<TabBar
	        	tintColor='#bba48e'
	        	unselectedTintColor='#919191'
	        	tintColor='#a9835e'
	        >
	        	<TabBar.Item
	        		title="首页"
	        		key="首页"
	        		onPress={() => {
	        			if(selectedTab !== 0){
	        				this.context.router.push('/index');
	        			}
	        		}}
	        		selected={ selectedTab === 0 }
	        		icon={<CustomIcon type={require('../../svg/home.svg')} />} 
	        		selectedIcon={<CustomIcon type={require('../../svg/homeSelect.svg')} />}
	        	/>
	        	<TabBar.Item
	        		title="分类"
	        		key="分类"
	        		onPress={() => {
	        			if(selectedTab !== 1){
	        				this.context.router.push('/gallery');
	        			}
	        		}}
	        		selected={ selectedTab === 1 }
	        		icon={<CustomIcon type={require('../../svg/classifi.svg')} />} 
	        		selectedIcon={<CustomIcon type={require('../../svg/classifiSelect.svg')} />} 
	        	/>
	        	<TabBar.Item
	        		title="购物车"
	        		key="购物车"
	        		onPress={() => {
	        			if(selectedTab !== 2){
	        				this.context.router.push('/cart');
	        			}
	        		}}
	        		selected={ selectedTab === 2 }
	        		icon={<CustomIcon type={require('../../svg/shopcar.svg')} />} 
	        		selectedIcon={<CustomIcon type={require('../../svg/shopcarSelect.svg')} />}
	        	/>
	        	{memberOrLogin}
	        </TabBar>
		);
	}
}

ComTabBar.contextTypes = {
	router: React.PropTypes.object,
}
ComTabBar.propTypes = {
	selectedTab: React.PropTypes.number,
	isLogin: React.PropTypes.bool.isRequired,
}
ComTabBar.defaultProps = {
	isLogin: false,
}

export default ComTabBar;