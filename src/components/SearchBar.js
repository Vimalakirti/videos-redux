import React from 'react'
import { connect } from 'react-redux'
import { searchTerm, fetchVideos } from '../actions'

class SearchBar extends React.Component {
    
    componentDidMount() {
        this.props.fetchVideos('')
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.fetchVideos(this.props.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <h4>Simple YouTube</h4>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>[Udemy] Modern React with Redux (Redo 'videos' project with Redux)</label>
                        <input
                            type="text" 
                            value={this.props.term}
                            onChange={event => this.props.searchTerm(event.target.value)}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { term: state.term }
}

export default connect(
    mapStateToProps,
    { searchTerm, fetchVideos }
)(SearchBar)