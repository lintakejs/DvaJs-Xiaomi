import {
	getPdView
} from '../services/page';

export default {
	namespace: 'DetailPage',
	state: {
		buy_option: [],
		goods_info: [],
		select_goods: {
			goods_number: 1,
			goods_id: 0,
		},
		viewContent: {
			galleryView: [],
			titleView: {
				canJoinActs:[],
				pd_name: '',
				pd_market_price: 0,
				pd_price: 0,
				product_desc: '',
				descTabsView: [],
			},
		}
	},
	effects: {
		fetchPdView: function *({ payload, onComplete }, {call, put, take}){
			const { data } = yield call(getPdView, {payload});
			const { status, datas } = data;
			const { view_content, goods_info, buy_option, default_goods_id } = datas;
			if(status == 'success'){
				yield put({ type: 'setViewContent', payload: { view_content, goods_info, buy_option, default_goods_id } });
				onComplete();
			}
		},
	},
	reducers: {
		setViewContent: function(state, { payload }){
			const { view_content, goods_info, buy_option, default_goods_id } = payload;
			return {
				...state,
				select_goods: {
					...state.select_goods,
					goods_id: default_goods_id,
				},
				goods_info,
				buy_option,
				viewContent: view_content,
			}
		},
		setTitleView: function(state, { payload }){
			const { goodsInfo } = payload;
			return {
				...state,
				viewContent:{
					...state.viewContent,
					titleView:{
						...state.viewContent.titleView,
						pd_price: goodsInfo.pd_price,
						pd_market_price: goodsInfo.pd_market_price,
					}
				}
			};
		},
		setBuyView: function(state, { payload }){
			
		}
	},
	subscriptions: {
	},
};