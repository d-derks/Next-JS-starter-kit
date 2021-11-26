import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import ButtonClose from './ButtonClose';

export default {
    title: 'Components/ButtonClose',
    component: ButtonClose,
} as Meta;

export const Template = (args) => {
    return (
       <div className="u_m-8">
           <ButtonClose
               {...args}
           />
       </div>
    );
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
};


export const Large = Template.bind({});
Large.args = {
    size: 'large',
};

export const ColorLight = Template.bind({});
ColorLight.args = {
    color: 'light',
};

