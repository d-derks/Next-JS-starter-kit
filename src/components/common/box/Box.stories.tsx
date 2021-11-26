import Box from './Box';

export default {
    title: 'Example/Box',
    component: Box,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export const Default = () => {
    return (
        <Box>
            <h1>This is a wrapper component which you can use for small alterations</h1>
        </Box>
    );
};
