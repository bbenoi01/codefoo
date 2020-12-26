import ignApi from '../api/ignApi';
import { types } from '../types';

export function getArticles() {
    return (dispatch) => {
        ignApi.get('/articles?count=20')
            .then(res => {
                dispatch({
                    type: types.GET_ARTICLES,
                    payload: res.data.data
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response
                })
            })
    }
}

export function getVideos() {
    return (dispatch) => {
        ignApi.get('/videos?count=20')
            .then(res => {
                dispatch({
                    type: types.GET_VIDEOS,
                    payload: res.data.data
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response
                })
            })
    }
}

export function getComments(contentId) {
    return (dispatch) => {
        ignApi.get(`/comments?ids=${contentId}`)
            .then(res => {
                dispatch({
                    type: types.GET_COMMENTS,
                    payload: res.data.data
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response
                })
            })
    }
}

export function detailsTrue() {
    return (dispatch) => {
        dispatch({
            type: types.DETAILS,
            payload: true
        })
    }
}

export function detailsFalse() {
    return (dispatch) => {
        dispatch({
            type: types.DETAILS,
            payload: false
        })
    }
}

export function toggleContentType(contentType) {
    return (dispatch) => {
        dispatch({
            type:types.CONTENT_TYPE,
            payload: contentType
        })
    }
}