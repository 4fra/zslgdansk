import {Container, Group, Text, ThemeIcon, Title} from "@mantine/core";
import classes from "./Postulate.module.css";
import {IconCheck} from "@tabler/icons-react";

interface PostulateProps {
    title: string;
    description: string;
}

export default function Postulate({title, description}: PostulateProps) {
    return (
        <Container className={classes.inner}>
            <Group>
                <ThemeIcon size={40} radius="xl" variant="filled">
                    <IconCheck size={24}/>
                </ThemeIcon>
                <Title order={2}>{title}</Title>
            </Group>
            <Text mt={"md"}>{description}</Text>
        </Container>
    );
}