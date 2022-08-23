import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    shouldComponentUpdate() {
        return true;
    }
    onChange = event => {
        this.setState({ value: event.target.value });
    };
    render() {
        return <input className={this.props.className} value={this.state.value} onChange={this.onChange} />;
    }
}
App.propTypes = {
};
export default App;
