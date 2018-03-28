import request from '../utils/request';
import {stringify} from 'qs';

export function dataEarn(){
	return request('/api/page', {
        method: 'post',
        headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }),
        body: stringify({
            page: 'Index'
        })
    });
}

export function category(){
	return request('/api/category', {
        method: 'post',
        headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }),
    });
}

export function getRecommend(){
	return request('/api/get_recommend', {
		method: 'post',
        headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }),
	});
}

export function getComList(payload){
	const { listId } = payload;
	
	return request('/api/commodityList', {
		method: 'post',
		headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }),
        body: JSON.stringify({
            listId,
        }),
	});
}

export function getPdView(payload){
	const { productId } = payload;
	
	return request('/api/productView2_new', {
		method: 'post',
		headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }),
        body: JSON.stringify({
            productId,
        }),
	});
}