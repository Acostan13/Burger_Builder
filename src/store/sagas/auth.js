// import { delay } from 'redux-saga'
import { put, delay } from 'redux-saga/effects'

//import * as actionTypes from '../actions/actionTypes'
import * as actions from '../actions/index'

export function* logoutSaga(action) {
    yield localStorage.removeItem('token')
    yield localStorage.removeItem('expirationDate')
    yield localStorage.removeItem('userId')
    yield put(actions.logoutSucceed())
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime)
    yield put(actions.logout())
}