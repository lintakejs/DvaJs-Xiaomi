'use strict';
import request from '../utils/request';
import {storageTokenKey} from '../utils/constant';


export function createUser(payload) {
	const { username, password } = payload;
	return request('/api/create_user', {
		method: 'POST',
        headers: new Headers({
            "Content-Type": "application/json; charset=utf-8"
        }),
        body: JSON.stringify({
            username,
            password,
        }),
	});
}