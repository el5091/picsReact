import React from 'react';


class SearchBar extends React.Component {

    // We can default the input by using non-empty string
    state = { term: '' };

    // "this.state.term" cannot be used here, nothing is initiated to it
    // *2* we can use an arrow function so that "this.state.term" is always = search bar <== IN-USE
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
    }


    // We DO NOT put on a set of () whenever we pass a callback function to an event handler -- onInputChange
    // Use .toUpperCase() to force all text to caps
    // *3* We can do the arrow function on onFormSubmit()
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
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