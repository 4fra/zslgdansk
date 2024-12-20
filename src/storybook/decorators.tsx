import React, {ComponentType} from 'react';
import {MantineProvider} from '@mantine/core';
import theme from "@/theme";

export const withMantineProvider = (Story: ComponentType) => (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Story/>
    </MantineProvider>
);