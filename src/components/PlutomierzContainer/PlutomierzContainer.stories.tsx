import {Meta, StoryObj} from "@storybook/react";
import PlutomierzContainer from "@/components/PlutomierzContainer/PlutomierzContainer";

const meta = {
    title: "Components/PlutomierzContainer",
    component: PlutomierzContainer
} satisfies Meta<typeof PlutomierzContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default",
    args: {}
};