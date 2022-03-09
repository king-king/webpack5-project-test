import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Page from '../component/Page';
import { commonConfig } from './config/page';

Enzyme.configure({ adapter: new Adapter() });

describe('Content test', () => {
    const wrapper = shallow(<Page {...commonConfig} />);
    test('快照', () => {
        expect(wrapper.render()).toMatchSnapshot();
    });

    test('交互', () => {
        // 点击重置按钮
        wrapper.find('button').simulate('click');
    });
});
