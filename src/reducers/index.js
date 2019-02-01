import { combineReducers } from 'redux'
import searchTermRuducer from './searchTermReducer'
import fetchVideosReducer from './fetchVideosReducer'
import selectedVideoReducer from './selectedVideoReducer'

export default combineReducers({
    term: searchTermRuducer,
    videos: fetchVideosReducer,
    selectedVideo: selectedVideoReducer
})