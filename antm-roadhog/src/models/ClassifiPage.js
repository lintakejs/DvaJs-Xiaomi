import {
	category
} from '../services/page';

export default {
	namespace: 'ClassifiPage',
	state: {
		categoryList: [],
	},
	reducers: {
		setCateData: function(state, { payload }){
			const { categoryList } = payload;
			return {
				...state,
				categoryList,
			}
		},
	},
	effects: {
		fetchCateList: function *({ payload, onComplete }, {call, put, take}){
			const { data } = yield call(category, {payload});
			const { status, categoryData } = data;
			if(status == 'success'){
				yield put({ type: 'setCateData', payload: categoryData });
				
			}
			
			yield put({
				type: 'appView/setViewState', 
				payload: { 
					headerContent: '分类',
					footSelect: 1,
				},
				onComplete: onComplete,
			});
			
		}
	},
	subscriptions: {
		
	}
}
