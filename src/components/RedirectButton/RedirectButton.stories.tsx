import RedirectButton from "@/components/RedirectButton/RedirectButton";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Components/RedirectButton",
    component: RedirectButton
} satisfies Meta<typeof RedirectButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: "Default",
    args: {
        to: "/"
    }
};
