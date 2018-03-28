import {
    auth,
    fetchUser
} from '../services/app';
import { createUser } from '../services/user';
import { storageTokenKey } from '../utils/constant';
import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';

export default {
	namespace: 'app',
	state: {
		isLogin: false,
		client_id: '',
		account: {
			accountToken: '',
			phone: '',
			nikeName: '',
		}
	},
	reducers: {
		queryUserSuccess: function (state, {payload}) {
			return {
				...state,
				client_id: payload.client_id,
                account:{
					accountToken: payload.accountToken,
					phone: payload.phone,
					nikeName: payload.nikeName,
				}
			}
		},
		hasToken: function (state, {payload}) {
			return {
                ...state,
                isLogin: true,
            };
		},
		authFail: function (state) {
            return {
                ...state,
                isLogin: false,
                client_id: '',
                account:{
					accountToken: '',
					phone: '',
					nikeName: '',
				}
            };
       	},
       	authSuccess: function (state, { payload }) {
       		return {
       			...state,
                isLogin: true,
                client_id: payload.client_id,
                account:{
					accountToken: payload.accountToken,
					phone: payload.phone,
					nikeName: payload.nikeName,
				}
       		}
       	}
	},
	effects: {
		auth: function *({ payload }, { call, put }) {
			const { username, password } = payload
			try{
				const { data } = yield call(auth, {username, password});
				if(data.status == 'success'){
					const { phone, accountToken, nikeName, client_id } = data.data;
					
					window.localStorage.setItem(storageTokenKey, accountToken);
					
					yield put({
                        type: 'authSuccess',
                        payload: { phone, accountToken, nikeName, client_id }
                   });
				}
				else{
					Toast.info(data.msg);
				}
			}
			catch(error){
				Toast.info(error);
			}
			yield put(routerRedux.goBack());
		},
		enterAuth: function *({payload, onComplete}, {put, take}){
			yield [put({type: 'checkToken'}), put({type: 'queryUser'})];
			yield [take('app/queryUserSuccess')];
	        onComplete();
		},
		checkToken: function*({payload}, {put, call, select}) {
			const token = window.localStorage.getItem(storageTokenKey);
			if (token) {
                yield put({type: 'hasToken', payload: {accountToken: token}});
            } else {
                yield put({type: 'authFail'});
            }
		},
		queryUser: function *({payload}, {put, take, call}) {
			const {data} = yield call(fetchUser);
			if (data) {
				const { phone, accountToken, nikeName, client_id } = data.data;
				
				yield put({
                    type: 'queryUserSuccess',
                    payload: { phone, accountToken, nikeName, client_id }
              	});
			}
		},
		register: function *({payload}, {put, call}){
			const { username, password } = payload;
			const { data } = yield call(createUser, { username, password });
			if(data){
				if(data.status == 'success'){
					yield put({
	                    type: 'auth',
	                    payload: { username, password }
	                });
               	}
			}
		},
		logout: function *({payload}, {put, call}){
			yield put({type: 'authFail'});
			window.localStorage.removeItem(storageTokenKey);
			yield put(routerRedux.goBack());
		}
	},
	subscriptions: {
		
	},
};