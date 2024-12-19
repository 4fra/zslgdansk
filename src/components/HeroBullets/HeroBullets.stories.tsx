import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import HeroBullets from './HeroBullets';

export default {
    title: 'Components/HeroBullets',
    component: HeroBullets,
} as Meta;

const Template: StoryFn = (args: Record<string, unknown>) => <HeroBullets {...args} />;

export const Default = Template.bind({});
Default.args = {};