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
		*fetchData({ payload, onComplete }, {call, put}){
			const { data } = yield call(dataEarn, {payload});
			const { status, pageData } = data;
			if(status == 'success'){
				const { CarouselData, TabList } = pageData;
				yield put({
					type: 'savePageData', 
					payload: { CarouselData, TabList },
				});
			}
			
			onComplete();
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