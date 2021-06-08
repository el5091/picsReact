import React from 'react';


class SearchBar extends React.Component {

    // We can default the input by using non-empty string
    state = { term: '' };


    // We DO NOT put on a set of () whenever we pass a callback function to an event handler -- onInputChange
    // Use .toUpperCase() to force all text to caps
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label> Image Search </label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;