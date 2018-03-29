import { getCart } from '../services/shopcar';
import { Toast } from 'antd-mobile';

export default {
	namespace: 'ShopCar',
	state: {
		ActTotalMoney: "0",
		totalSelGoods: 0,
		items: [],
	},
	effects: {
		fetchCartInf: function *({ payload, onComplete }, {call, put, take, select}){
			const client_id = yield select(state => { return state.app.client_id; });
			const { data } = yield call(getCart, { client_id });
			const { status, datas } = data;
			const { items } = datas;
			if(status == 'success'){
				yield put({type: 'setCartItems', payload: datas})
			}
			
			yield put({
				type: 'appView/setViewState', 
				payload: { 
					headerContent: '购物车',
					footSelect: 2,
					hasFooter: items.length > 0 ? false : true 
				},
				onComplete: onComplete,
			});
		},
		Settlement: function *({ payload }, { call, put, take, select }){
			Toast.info('后续的开发需要与服务器紧密交互了，以后做node服务器再继续吧~');
		}
	},
	reducers: {
		setCartItems: function(state, { payload }){
			return {
				...state,
				...payload,
			}
		}
	},
	subscriptions: {
	},
};
