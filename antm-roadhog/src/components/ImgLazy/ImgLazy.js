import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class ImgLazy extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLoaded: false,
        };
        this._handleScroll = this._handleScroll.bind(this);
       	//使用函数节流，性能优先
        this.handleScroll = this.throttle(this._handleScroll, 100);
    }

    /**
     * 添加监听事件
     */
    componentDidMount() {
    	this._outSideBox = this.props.outSideBox ? document.getElementsByClassName(this.props.outSideBox)[0] : document.body;
        this._outSideBox.addEventListener('scroll', this.handleScroll);
        this._outSideBox.addEventListener('resize', this.handleScroll);
        this._handleScroll();
    }

    /**
     * 移除事件
     */
    componentWillUnMount() {
        this._outSideBox.removeEventListener('scroll', this.handleScroll);
        this._outSideBox.removeEventListener('resize', this.handleScroll);
    }

    /**
     * 获取窗口的高度
     * @returns {XML}
     */
    getClientHeight() {
        var clientHeight = 0;

        if (this._outSideBox.clientHeight && this._outSideBox.clientHeight) {
            clientHeight = Math.min(this._outSideBox.clientHeight, this._outSideBox.clientHeight);
        } else {
            clientHeight = Math.max(this._outSideBox.clientHeight, this._outSideBox.clientHeight);
        }
        return clientHeight;
    }

    /**
     * 获取滚动条滚动的高度
     */
    getScrollTop() {
        let scrollTop = 0;
        if (this._outSideBox && this._outSideBox.scrollTop) {
            scrollTop = this._outSideBox.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        } else {
            scrollTop = window.scrollY || window.pageYOffset;
        }

        return scrollTop;
    }

    /**
     * 获取当前图片距离顶部的xy坐标
     */
    getNodeTop() {
        const viewTop = this.getScrollTop();
        
        const img = ReactDOM.findDOMNode(this); //当前节点
        const nodeTop = img.getBoundingClientRect().top + viewTop;
        const nodeBottom = nodeTop + img.offsetHeight;
        return {
            nodeTop: nodeTop,
            nodeBottom: nodeBottom,
        };
    }


    /**
     * 函数节流
     * @returns {XML}
     */
    throttle(fn, delay) {
        let timer = null;

        return function () {
            let context = this;
            let args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    }

    /**
     * 处理滚动事件
     * @returns {XML}
     */
    _handleScroll() {
        const {offset} = this.props; //偏移量

        const {nodeTop ,nodeBottom} = this.getNodeTop();
		
        const viewTop = this.getScrollTop();
        
        const viewBottom = viewTop + this.getClientHeight();
        //当图片出现在视野范围内,设置真正的图片，同时移除监听
        if (nodeBottom + offset >= viewTop && nodeTop - offset <= viewBottom) {
            this.setState({
                isLoaded: true,
            });
            this._outSideBox.removeEventListener('scroll', this.handleScroll);
            this._outSideBox.removeEventListener('resize', this.handleScroll);
        }
    }

    render() {
        const {
            className,
            style,
            src,
            placeholder} = this.props;
        const {isLoaded} = this.state;
        let true_src = isLoaded ? src : placeholder;
        return (
            <img className={className} style={style}
                 src={true_src}/>
        )
    }
}

ImgLazy.defaultProps = {
	outSideBox: 'app_view',
    placeholder: 'https://pic.solux.cn/PC/img-preloading.gif',//默认图片
    offset: 100,//默认距离
}