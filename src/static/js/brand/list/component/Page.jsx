import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate() {
        return true;
    }
    render() {
        return (
           <div>hello word</div>
        );
    }
}
App.propTypes = {
};
export default App;
