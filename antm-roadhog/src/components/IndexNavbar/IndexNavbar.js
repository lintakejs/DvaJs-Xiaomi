import TweenOne from 'rc-tween-one';
import { NavBar } from 'antd-mobile';
import CustomIcon from '../CustomIcon/CustomIcon';
import Search from '../Search/Search';

import styles from './IndexNavbar.less';

class IndexNavbar extends React.Component{
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
  render() {
    return (
      <div className={styles.header}>
      	<NavBar mode="light"
		    	rightContent={[
		        <CustomIcon key="0" className={styles.header_search} type={require('../../svg/search.svg')} onClick={this.onClick} />,
		        <CustomIcon key="1" type={require('../../svg/message.svg')} />,
		    	]}
    		>
    			<CustomIcon className={styles.header_caption} type={require('../../svg/logo.svg')}/>
    		</NavBar>
    		<Search open={this.state.open} onBackClick={this.onClick.bind(this)} />
      </div>
    );
  }
}

export default IndexNavbar;