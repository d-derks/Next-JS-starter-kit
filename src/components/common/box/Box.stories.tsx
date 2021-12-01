import { Meta } from '@storybook/react/types-6-0';
import Box from './Box';
import {Template} from "#components/common/button/Button.stories";

export default {
    title: 'Example/Box',
    component: Box,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

export const Default = () => {
    return (
        <Box>
            <h1>This is a wrapper component which you can use for small alterations</h1>
        </Box>
    );
};

export const Rounded = Template.bind({});
Rounded.args = {
    rounded: true,
};
