import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

export const Template = (args) => {
    return (
        <div className='u_m-3'>
            <Button
                {...args}
                text="Button"
            />
        </div>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    secondary: false,
    text: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    secondary: true,
    text: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    text: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    text: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    text: 'Button',
};
