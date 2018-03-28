import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
  	app.unmodel(model.namespace);
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
	
	function requireAuth(nextState, replace, callback) {
    app._store.dispatch({
        type: 'app/enterAuth',
        payload: {},
        onComplete: callback
    });
	}
	
	function requireIndex(nextState, replace, callback){
		app._store.dispatch({
        type: 'IndexPage/fetchData',
        payload: {},
        onComplete: callback
    });
	}
	
	function requireCartInf(nextState, replace, callback){
		app._store.dispatch({
			type: 'ShopCar/fetchCartInf',
			payload: {},
			onComplete: callback
		});
	}
	
	function requireCateList(nextState, replace, callback){
		app._store.dispatch({
				type: 'ClassifiPage/fetchCateList',
				payload: {},
				onComplete: callback
		});
	}
	
	function requireRecList(nextState, replace, callback){
		app._store.dispatch({
				type: 'recommend/fetchRecommend',
				payload: {},
				onComplete: callback
		});
	}
	
	function requireComList(nextState, replace, callback){
		const { listId } = nextState.params;
		app._store.dispatch({
				type: 'ListPage/fetchCommodityList',
				payload: {
					listId,
				},
				onComplete: callback
		});
	}
	
	function requirePdView(nextState, replace, callback){
		const { productId } = nextState.params;
		app._store.dispatch({
				type: 'DetailPage/fetchPdView',
				payload: {
					productId,
				},
				onComplete: callback
		});
	}
	
	function setCommon({ 
		hasHeader = true,
		headerContent = '',
		hasFooter = true,
		footSelect = null,
		needBack = true,
		needSearch = true,
	} = {}, callback){
		const nextState = { hasHeader, headerContent, hasFooter, footSelect, needBack, needSearch, };
		app._store.dispatch({
				type: 'appView/setViewState',
				payload: {
					...nextState,
				},
				onComplete: callback
		});
	}
	
	function requireAccRight(nextState, replace, callback){
		let currentState = app._store.getState();
		let isLogin = currentState.app.isLogin;
		if(!isLogin){
			replace('/login');
		}
	}
	
	const routes = [
		{
			path: '/',
			getComponent(nextState, cb){
				cb(null, require('./routes/app'));
			},
			onEnter(nextState, replace, callback){
				requireAuth(nextState, replace, callback);
			},
			indexRoute: {
				onEnter: (nextState, replace) => {
					replace('/index');
				},
			},
			childRoutes: [
				{
					path: 'index',
					onEnter(nextState, replace, callback){
						registerModel(app, require('./models/IndexPage'));
						requireIndex(nextState, replace, callback);
					},
					getComponent(nextState, cb){
						setCommon({
							hasHeader: true,
							footSelect: 0,
						});
						require.ensure([], (require) => {
							cb(null, require('./routes/IndexPage/IndexPage'));
						});
					}
				},
				{
					path: 'gallery',
					onEnter(nextState, replace, callback){
						registerModel(app, require('./models/ClassifiPage'));
						requireCateList(nextState, replace, callback);
					},
					getComponent(nextState, cb){
						setCommon({
							headerContent: '分类',
							footSelect: 1,
						});
						require.ensure([], (require) => {
							cb(null, require('./routes/ClassifiPage/ClassifiPage'));
						});
					}
				},
				{
					path: 'cart',
					onEnter(nextState, replace, callback){
						registerModel(app, require('./models/ShopCar'));
						requireCartInf(nextState, replace, callback);
					},
					getComponent(nextState, cb){
						setCommon({
							headerContent: '购物车',
							footSelect: 2,
							hasFooter: app._store.getState().ShopCar.items.length > 0 ? false : true,
						});
						requireRecList();
						require.ensure([], (require) => {
							cb(null, require('./routes/CartPage/CartPage'));
						});
					}
				},{
					path: 'member',
					onEnter(nextState, replace, callback){
						setCommon({
							hasHeader: false,
							headerContent: '个人中心',
							footSelect: 3,
						}, callback);
					},
					getComponent(nextState, cb){
						require.ensure([], (require) => {
							cb(null, require('./routes/MemberPage/MemberPage'));
						});
					},
				},{
					path: 'member/set',
					onEnter(nextState, replace, callback){
						requireAccRight(nextState, replace);
						setCommon({
							hasHeader: true,
							headerContent: '个人中心',
							hasFooter: false,
							footSelect: 4,
						}, callback);
					},
					getComponent(nextState, cb){
						require.ensure([], (require) => {
							cb(null, require('./routes/MemberPage/MemberSetPage/MemberSetPage'));
						});
					},
				},{
					path: 'login',
					onEnter(nextState, replace, callback){
						setCommon({
							headerContent: '登录',
							hasFooter : false,
							footSelect : 6,
							needSearch : false,
						}, callback);
					},
					getComponent(nextState, cb){
						require.ensure([], (require) => {
							cb(null, require('./routes/LoginPage/LoginPage'));
						});
					}
				},{
					path: 'register',
					onEnter(nextState, replace, callback){
						setCommon({
							headerContent: '注册',
							hasFooter : false,
							footSelect : 7,
							needSearch : false,
						}, callback);
					},
					getComponent(nextState, cb){
						require.ensure([], (require) => {
							cb(null, require('./routes/RegisterPage/RegisterPage'));
						});
					}
				},{
					path: 'fcode',
					onEnter(nextState, replace, callback){
						setCommon({
							headerContent: 'F码购买',
							hasFooter : false,
							footSelect : 7,
						}, callback);
						registerModel(app, require('./models/fcode'));
					},
					getComponent(nextState, cb){
						require.ensure([], (require) => {
							cb(null, require('./routes/FcodePage/FcodePage'));
						});
					}
				},{
					path: 'commodity/list/:listId',
					onEnter(nextState, replace, callback){
						requireRecList();
						registerModel(app, require('./models/ListPage'));
						requireComList(nextState, replace, callback);
					},
					getComponent(nextState, cb){
						setCommon({
							headerContent: '商品列表',
							footSelect : 8,
						});
						require.ensure([], (require) => {
							cb(null, require('./routes/CommodityPage/ListPage'));
						});
					}
				},{
					path: 'commodity/detail/:productId',
					onEnter(nextState, replace, callback){
						requireRecList();
						registerModel(app, require('./models/DetailPage'));
						requirePdView(nextState, replace, callback);
					},
					getComponent(nextState, cb){
						setCommon({
							hasHeader: false,
							headerContent: '商品详情',
							hasFooter: false,
							footSelect : 9,
						});
						require.ensure([], (require) => {
							cb(null, require('./routes/CommodityPage/detailPage/detailPage'));
						});
					}
				}
			]
		},
	];
	
	return <Router history={history} routes={routes} />;
}

export default RouterConfig;