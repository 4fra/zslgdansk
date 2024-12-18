import type {Preview} from '@storybook/react';
import {withMantineProvider} from '../src/storybook/decorators';
import '@mantine/core/styles.css';
import '@mantine/core/styles/global.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [withMantineProvider],
};

export default preview;