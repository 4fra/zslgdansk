import Postulate from "./Postulate";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Components/Postulate",
    component: Postulate
} satisfies Meta<typeof Postulate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: "Default",
    args: {
        title: "Postulat PDW",
        description: "Przykładowy opis postulatu - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec libero tincidunt ultricies."
    },
};
