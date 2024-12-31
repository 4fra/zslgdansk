import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import Plutomierz from "@/components/Plutomierz/Plutomierz";

export default {
    title: 'Components/Plutomierz',
    component: Plutomierz,
} as Meta;

const Template: StoryFn = () => <Plutomierz/>;

export const Default = Template.bind({});
Default.args = {};