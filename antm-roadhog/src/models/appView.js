
export default {
	namespace: 'appView',
	state: {
		hasHeader: true,
		headerContent: '',
		hasFooter: true,
		footSelect: null,
		needBack: false,
		needSearch: false,
		animateCls: 'slide-left',
	},
	reducers: {
		setCommonState: function(state, { payload }){
			return {
				...state,
				hasHeader: payload.hasHeader,
				headerContent: payload.headerContent,
				hasFooter: payload.hasFooter,
				footSelect: payload.footSelect,
				needBack: payload.needBack,
				needSearch: payload.needSearch,
				animateCls: payload.animateCls,
			};
		},
	},
	effects: {
		setViewState: function *({ payload, onComplete }, {call, put, take, select}){
			const oriFootSelect = yield select(state => { return state.appView.footSelect; });
			const { footSelect } = payload;
			if(footSelect != null){
				if(footSelect <= oriFootSelect){
					payload.animateCls = 'slide-right';
				}
				else if(footSelect > oriFootSelect){
					payload.animateCls = 'slide-left';
				}
			}
			else{
				payload.animateCls = 'slide-left';
			}
			yield put({type: 'setCommonState', payload: payload });
			onComplete();
		}
	},
	subscriptions: {
		
	},
};