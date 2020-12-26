import { types } from './types';

const INITIAL_STATE = {
    articles: [],
    videos: [],
    comments: [],
    errors: {},
    details: false,
    contentType: null
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case (types.GET_ARTICLES): {
            return {
                ...state,
                articles: payload
            }
        }

        case (types.CLEAR_ARTICLES): {
            return {
                ...state,
                articles: []
            }
        }

        case (types.GET_VIDEOS): {
            return {
                ...state,
                videos: payload
            }
        }

        case (types.CLEAR_VIDEOS): {
            return {
                ...state,
                videos: []
            }
        }

        case (types.GET_COMMENTS): {
            return {
                ...state,
                comments: payload
            }
        }

        case (types.SET_ERRORS): {
            return {
                ...state,
                errors: payload
            }
        }

        case (types.CLEAR_ERRORS): {
            return {
                ...state,
                errors: {}
            }
        }

        case (types.DETAILS): {
            return {
                ...state,
                details: payload
            }
        }

        case (types.CONTENT_TYPE): {
            return {
                ...state,
                contentType: payload
            }
        }

        default:
            return state;
    }
};