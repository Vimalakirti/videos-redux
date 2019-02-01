import youtube from '../apis/youtube'

// Action creators
export const selectVideo = video => {
    // Return an action
    return ({
        type: 'VIDEO_SELECTED',
        payload: video
    })
}

export const searchTerm = term => {
    return ({
        type: 'SEARCH_TERM',
        payload: term
    })
}

export const fetchVideos = term => async dispatch => {
    const response = await youtube.get('/search', {
        params: {
            q: term
        }
    })
    dispatch({ type: 'FETCH_VIDEOS', payload: response.data.items})
    dispatch(selectVideo(response.data.items[0]))
}