import { connect } from 'dva';
import classnames from 'classnames';

const MainLayout = (props) => {
	const { hasHeader, hasFooter, children, hasStyle } = props;
	
	let viewClass = classnames({
		app_view: true,
		app_view_with_header: hasHeader,
		app_view_with_footer: hasFooter,
	});
	
	return (
		<div className={viewClass} style={hasStyle}>
			{children}
		</div>
	)
}

MainLayout.propTypes = {
	hasHeader: React.PropTypes.bool.isRequired,
	hasFooter: React.PropTypes.bool.isRequired,
};

MainLayout.defaultProps = {
	hasHeader: true,
	hasFooter: true,
};

export default connect()(MainLayout);