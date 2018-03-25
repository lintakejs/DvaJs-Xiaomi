import { connect } from 'dva';
import { Flex } from 'antd-mobile';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import IndexNavbar from '../../components/IndexNavbar/IndexNavbar';
import ComCarousel from '../../components/ComCarousel/ComCarousel';

import MainLayout from '../../components/MainLayout/MainLayout';

import styles from './IndexPage.less';

const IndexPage = ({
    isLogin,
    account,
    carouselData,
    TabList,
}) => {
	return (
		<MainLayout>
			<IndexNavbar />
			<ComCarousel slideItem={carouselData} />
			<Flex justify="center" className={styles.head_flex}>
				<div className={styles.head_flex_inline}>
					<CustomIcon className={styles.head_flex_svg} type={require('../../svg/birthday.svg')} />
					<p className={styles.head_flex_int}>了解松霖</p>
				</div>
				<div className={styles.head_flex_inline}>
					<CustomIcon className={styles.head_flex_svg} type={require('../../svg/birthday.svg')} />
					<p className={styles.head_flex_int}>了解松霖</p>
				</div>
				<div className={styles.head_flex_inline}>
					<CustomIcon className={styles.head_flex_svg} type={require('../../svg/birthday.svg')} />
					<p className={styles.head_flex_int}>了解松霖</p>
				</div>
			</Flex>
			{
				TabList.map((item, index) => {
					return (
						<div className={styles.page_item} key={index}>
							<h2 className={styles.page_item_title}>
								{item.TabTitleMain}
								<small>{item.TabTitle}</small>
							</h2>
							<a href="#" className={styles.page_item_img}>
								<img src={item.TabMain} />
							</a>
							<Flex justify="between" className={styles.page_item_flex}>
								{
									TabList[index].TabChildList.map((item_child, index_child) => (
										<a href="#" key={index_child}>
											<img src={item_child} />
										</a>
									))
								}
							</Flex>
						</div>
					)
				})
			}
		</MainLayout>
	);
}

export default connect((state, ownProps) => {
    return {
        isLogin: state.app.isLogin,
        account: state.app.account,
        carouselData: state.IndexPage.CarouselData,
        TabList: state.IndexPage.TabList,
    };
})(IndexPage);