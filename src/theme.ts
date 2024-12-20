import {createTheme} from '@mantine/core';

const theme = createTheme({
    colors: {
        red: [
            '#ffe5e5',
            '#ffcccc',
            '#ff9999',
            '#ff6666',
            '#ff3333',
            '#ff0000',
            '#cc0000',
            '#990000',
            '#660000',
            '#330000',
        ],
    },
    primaryColor: 'red',
    autoContrast: true,
});

export default theme;