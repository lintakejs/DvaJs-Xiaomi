
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
			
			if(onComplete){
				onComplete();
			}
		}
	},
	reducers: {
		setCommonState: function(state, { payload }){
			const initState = { hasHeader: true, headerContent: '', hasFooter: true, footSelect: null, needBack: true, needSearch: true, };
			return {
				...state,
				...initState,
				...payload,
			};
		},
	},
	subscriptions: {
		
	},
};
