import { getRecommend } from '../services/page';

export default {
	namespace: 'recommend',
	state: {
		recom_list: [],
	},
	effects: {
		fetchRecommend: function*({ payload }, { call, put }){
			const { data } = yield call(getRecommend, {payload});
			if(data){
				const { status, recom_list } = data;
				if(status == 'success'){
					yield put({
						type: 'refrash',
						payload: { recom_list }
					});
				}
			}
		},
	},
	reducers: {
		refrash: function(state, {payload}){
			const { recom_list } = payload;
			return {
				...state,
				recom_list,
			}
		},
	},
	subscriptions: {		
	},
};