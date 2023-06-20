import { call, put, takeEvery } from 'redux-saga/effects'
import { getImagesFailure, getImagesFetch, getImagesSuccess } from './gallerySlice'
import {url_images as url} from './utils/contants'

function* workGetImagesFetch() {
    try {
        const res = yield call(() => fetch(url));
        const images = yield res.json();
        yield put(getImagesSuccess(images))
        
    } catch (error) {
        yield put(getImagesFailure())
    }
}

function* imageSaga() {
    yield takeEvery(getImagesFetch.type, workGetImagesFetch)
}

export default imageSaga;