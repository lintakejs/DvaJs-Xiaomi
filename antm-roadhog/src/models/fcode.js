import { checkFocdes } from '../services/fcode';

export default {
	namespace: 'fcode',
	state: {
		fcodeValue: '',
	},
	subscriptions: {
	},
	effects: {
		fetchFcode: function *({ payload, onComplete }, { put, call, select }){
			const { fcode } = payload;
			let All_state = yield select();
			const account_token = All_state.app.account.accountToken;
			if(fcode){
				const { data } = yield call(checkFocdes, { fcode, account_token });
				onComplete(data.status, data.msg);
			}
		}
	},
	reducers: {
	},

};