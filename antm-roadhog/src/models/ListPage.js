import {
	getComList
} from '../services/page';

export default {
	namespace: 'ListPage',
	state: {
		commodityList: [],
	},
	effects: {
		fetchCommodityList: function *({ payload, onComplete }, {call, put, take}){
			const { data } = yield call(getComList, {payload});
			const { status, com_list } = data;
			if(status == 'success'){
				yield put({ type: 'setCommodityList', payload: { com_list } })
				onComplete();
			}
		}
	},
	reducers: {
		setCommodityList: function(state, { payload }){
			const { com_list } = payload;
			return {
				...state,
				commodityList: com_list,
			};
		}
	},
	subscriptions: {},
};