import React from 'react';
import { Select } from '@jd/jmtd';
import PPageFramework from '@jd/sz-brand-react-component/dist/PageFrameWork';
import commonUrl from '../config/commonConfig';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '1'
        };
    }
    shouldComponentUpdate() {
        return true;
    }
    setValue = value => {
        this.setState({ value });
    };
    render() {
        const data = [
            {
                label: '选项1',
                value: '1'
            },

            {
                label: '选项2',
                value: '2'
            },

            {
                label: '选项3',
                value: '3',
                disabled: true
            },

            {
                label: '选项4',
                value: '4'
            },

            {
                label: '选项5',
                value: '5'
            }
        ];
        return (
            <PPageFramework pageParam={{}} menuCode='' urlConfig={commonUrl}>
                <div>
                    太棒了，哈哈哈
                    <Select data={data} value={this.state.value} onChange={this.setValue} />
                </div>
            </PPageFramework>
        );
    }
}

App.propTypes = {};

export default App;
