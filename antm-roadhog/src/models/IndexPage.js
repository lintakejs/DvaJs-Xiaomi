import {
	dataEarn
} from '../services/page';

export default {
	namespace: 'IndexPage',
	state: {
		CarouselData: [],
		TabList: [],
	},
	effects: {
		*fetchData({ payload, onComplete }, {call, put, take}){
			const { data } = yield call(dataEarn, {payload});
			const { status, pageData } = data;
			if(status == 'success'){
				const { CarouselData, TabList } = pageData;
				yield put({
					type: 'savePageData', 
					payload: { CarouselData, TabList },
				});
			}
			
			yield put({
				type: 'appView/setViewState', 
				payload: { 
					hasHeader: true,
					footSelect: 0,
				},
				onComplete: onComplete,
			});
		},
	},
	reducers:{
		savePageData: function(state, {payload}){
			const { CarouselData, TabList } = payload;
			return {
				...state,
				CarouselData,
				TabList,
			};
		},
	}
}
