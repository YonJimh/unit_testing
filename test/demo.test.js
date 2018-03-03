import React from 'react';
import {mount, configure }  from 'enzyme';
import sinon from 'sinon'; //检测调用情况
import Demo from '../src/demo';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



describe('UI test #demo', ()=>{
    it('should have title', ()=>{
        const wrapper = mount(<Demo/>);
        const title = wrapper.find('h1');
        expect(title).toHaveLength(1);
        expect(title.text()).toBe('This is a demo');
    });

    //点击class为counter的时候加1
    it('shold add 1 when click button', ()=>{
        const wrapper = mount(<Demo />);
        const counter = wrapper.find('div.counter');
        const v1 = parseInt(counter.text());
        wrapper.find('button').simulate('click');//模拟点击
        const v2 = parseInt(counter.text());
        expect(v2).toBe(v1+1);
    });

    it('shold change  when click button', ()=>{
        const wrapper = mount(<Demo />);
        const counter = wrapper.find('div.counter');
        wrapper.find('input').simulate('change',{
            target: {
                value:'5'
            }
        })
        const v1 = parseInt(counter.text());
        expect(v1).toBe(5);
    });

    test('shold change  when props change', ()=>{
        const wrapper = mount(<Demo title="Demo" value="5"/>);
        sinon.spy(Demo.prototype,'componentWillReceiveProps');
        const title = wrapper.find('h1');
        wrapper.setProps({
            title:"Demo2"
        });
        expect(title.text()).toBe("Demo2");
        const callCount = 
        Demo.prototype.componentWillReceiveProps.callCount;
        expect(callCount).toBe(1);
    });

})