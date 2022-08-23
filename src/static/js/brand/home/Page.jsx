import React from 'react';
import Inuput1 from './Input1';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }
    shouldComponentUpdate() {
        return true;
    }
    select = value => {
        this.setState({ value });
    };
    render() {
        const in1 = <Inuput1 key='input-1' className='input-1' />;
        const in2 = (
            <div>
                {' '}
                <Inuput1 key='input-2' className='input-2' />
                {' '}
            </div>
        );
        return (
            <div>
                <div>
                    <button onClick={() => this.select(1)}>选择1</button>
                    <button onClick={() => this.select(2)}>选择2</button>
                </div>
                <div>
                    {this.state.value === 1 ? in1 : in2}
                </div>
            </div>
        );
    }
}
App.propTypes = {
};
export default App;
