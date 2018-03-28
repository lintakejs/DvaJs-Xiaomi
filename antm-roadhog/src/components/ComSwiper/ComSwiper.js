import Swiper from 'swiper';

class ComSwiper extends React.Component{
	constructor(props) {
		super(props);
		
		this.sw = null;
	}
	
	componentDidMount(){
		if(this.sw == null){
			const { resistanceRatio, autoplay } = this.props
			
			this.sw = new Swiper('.swiper-container', {
				lazy: true,
				preloadImages: false,
				pagination: {
				    el: '.swiper-pagination',
				    type: 'bullets',
				},
				autoplay: autoplay,
				resistanceRatio: resistanceRatio > 0 ? resistanceRatio : 0,
			});
		}
	}
	
	componentWillUnmount(){
		if(this.sw){
			this.sw.destroy();
			this.sw = null;
		}
	}
	
	render(){
		const { slideItem, className } = this.props;
		let containerCls = className ? `swiper-container ${className}` : `swiper-container`;
		return (
			<div className={containerCls}>
				<div className="swiper-wrapper">
				{
					slideItem.map((item, index) => (
					<div className="swiper-slide" key={index}>
						<a href="#">
							<img className="swiper-lazy" data-src={item} />
						</a>
						<div className="swiper-lazy-preloader"></div>
					</div>
					))
				}
				</div>
				<div className="swiper-pagination"></div>
			</div>
		);
	}
}

ComSwiper.propTypes = {
	slideItem: React.PropTypes.array.isRequired,
}

export default ComSwiper;