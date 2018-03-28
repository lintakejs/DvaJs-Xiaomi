import request from '../utils/request';
import {stringify} from 'qs';

export function getCart(payload){
	const { client_id } = payload;
	
	return request('/api/cart/index', {
        method: 'post',
        headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }),
        body: stringify({
            client_id,
        })
    });
}
