import React, {ComponentType} from 'react';
import {MantineProvider} from '@mantine/core';

export const withMantineProvider = (Story: ComponentType) => (
    <MantineProvider defaultColorScheme="dark">
        <Story/>
    </MantineProvider>
);