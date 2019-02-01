import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import { connect } from 'react-redux'


class App extends React.Component {

    render() {
        return (
        <div className="ui container">
            <SearchBar />
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column">
                        <VideoDetail video={this.props.selectedVideo}/>
                    </div>
                    <div className="six wide column">
                        <VideoList videos={this.props.videos} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return { videos: state.videos, selectedVideo: state.selectedVideo }
}

export default connect(mapStateToProps)(App)