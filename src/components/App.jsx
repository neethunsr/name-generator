import React from 'react';
import Header from './Header';
import Search from './Search';
import Result from './Result';
import './App.css';

const name = require('@rstacruz/startup-name-generator');


class App extends React.Component {
    state = {
        headerText: 'Username Generator!',
        headerExpanded: true,
        suggestedNames: [],
    }

    handleChange = (inputText) => {
    //  this.setState({headerExpanded: !(inputText.length > 0) });
        this.setState({headerExpanded: !inputText, suggestedNames: inputText ? name(inputText) : [] });
    }

    render () {
        return (
            <div>
                <Header 
                headerExpanded={this.state.headerExpanded}
                headTitle={this.state.headerText}
                />
                <Search onChange={this.handleChange} />
                <Result suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

export default App;