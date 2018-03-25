import { Carousel } from 'antd-mobile';

class ComCarousel extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		setTimeout(() => {
	    	window.dispatchEvent(new Event('resize'));
	    }, 0);
	}
	render(){
		let { slideItem } = this.props;
		return (
			<Carousel
				autoplay={true}
				infinite={true}
				selectedIndex={0}
				swipeSpeed={35}
				style={{
					height: '4.22rem',
				}}
			>
				{
					slideItem.map((item, index) => (
						<a href="#" key={index}>
							<img src={item} />
						</a>
					))
				}
			</Carousel>
		)
	}
}

ComCarousel.propTypes = {
	slideItem: React.PropTypes.array.isRequired
}

export default ComCarousel;