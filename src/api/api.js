import axios from 'axios';
import Qs from 'qs';
let base = '/op';

export const getBackMemberListPage = params => { return axios.get(`${base}/sys/user/accounts`, { params: params }); };