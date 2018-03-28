import { connect } from 'dva';
import { Flex } from 'antd-mobile';
import { Link } from 'dva/router';
import ImgLazy from '../ImgLazy/ImgLazy';

import styles from './RecommendList.less';

const RecommendList = ({
	recom_list,
}) => {
	
	return (
		<div className={styles.recommend_box}>
			<div className={styles.recommend_img}>
				<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" />
			</div>
			<Flex className={styles.recommend_list} direction="row" wrap="wrap" alignContent="start" align="center" justify="between">
				{
					recom_list.map((item, index) => {
						return (
							<div className={styles.goods_item} key={index}>
								<Link to="/commodity/detail/7574">
									<ImgLazy src={item.image_url} />
									<div className={styles.goods_info}>
										<div className={styles.goods_name}>{item.name}</div>
										<div className={styles.goods_price}>{item.price}<del>{item.market_price}</del></div>
									</div>
								</Link>
							</div>
						)
					})
				}
			</Flex>
		</div>
	)
}

export default connect((state, ownProps) => {
    return {
        recom_list: state.recommend.recom_list,
    };
})(RecommendList);