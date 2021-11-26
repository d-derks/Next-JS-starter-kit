import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Typography from './Typography';

export default {
    title: 'Components/Typograhpy',
    component: Typography,
} as Meta;

export const Template = (args) => {
    return (
        <Typography
            variant='p'
            text='Default text'
            {...args}
        />
    );
};

export const H1 = Template.bind({});
H1.args = {
    variant: 'h1',
    text: 'h1 title',
};

export const H2 = Template.bind({});
H2.args = {
    variant: 'h2',
    text: 'h2 title',
};

export const H3 = Template.bind({});
H3.args = {
    variant: 'h3',
    text: 'h3 title',
};

export const H4 = Template.bind({});
H4.args = {
    variant: 'h4',
    text: 'h4 title',
};

export const defaultText = Template.bind({});
defaultText.args = {
    variant: 'p',
    text: 'Default text',
};

export const Link = Template.bind({});
Link.args = {
    variant: 'a',
    text: 'Link',
};
