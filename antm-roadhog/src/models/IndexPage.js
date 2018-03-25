import {
	dataEarn
} from '../services/page';

export default {
	namespace: 'IndexPage',
	state: {
		CarouselData: [],
		TabList: [],
	},
	subscriptions: {
		setup({ dispatch, history }) {
      		return history.listen(({ pathname, query }) => {
        		if (pathname === '/index') {
          			dispatch({ type: 'fetchData', payload: query });
        		}
      		});
    	},
	},
	effects: {
		*fetchData({ payload }, {call, put}){
			const { data } = yield call(dataEarn, {payload});
			const { status, pageData } = data;
			if(status == 'success'){
				const { CarouselData, TabList } = pageData;
				yield put({
					type: 'savePageData', 
					payload: { CarouselData, TabList },
				});
			}
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