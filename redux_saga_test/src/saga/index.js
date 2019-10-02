import { call, spawn, put, takeEvery } from 'redux-saga/effects';
import { axios } from 'axios';
import { CALL_DATA, callDataFail, callDataSuccess} from '../actions';

function* fetchCallData(){
    const {data} = yield axios.get("http://localhost:4321")
}