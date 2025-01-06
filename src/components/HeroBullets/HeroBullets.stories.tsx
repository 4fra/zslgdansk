import HeroBullets from "@/components/HeroBullets/HeroBullets";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Components/HeroBullets",
    component: HeroBullets
} satisfies Meta<typeof HeroBullets>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default",
    args: {},
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
};