'use strict';
import request from '../utils/request';
import {stringify} from 'qs';

export function checkFocdes(payload){
	const { fcode, account_token } = payload;
	return request('/api/checkFoceds', {
        method: 'post',
        headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }),
        body: stringify({
            fcode,
            account_token,
        })
    });
}
