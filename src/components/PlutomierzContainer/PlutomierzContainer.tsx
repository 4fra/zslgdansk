import React from 'react';
import Plutomierz from "@/components/Plutomierz/Plutomierz";
import {Container, Text, Title} from "@mantine/core";
import classes from "./PlutomierzContainer.module.css";

const PlutomierzContainer: React.FC = () => (
    <Container className={classes.container}>
        <Title order={1}>Darmowy Plutomierz online!</Title>
        <Title order={4}>Sprawdź siłę pozytywnych wibracji!</Title>
        <Plutomierz/>
        <Text size="md" mt="xl">
            Plutomierz służy do pomiaru globalnych pozytywnych wibracji, w standardowej jednostce - Pluta.
        </Text>
    </Container>
);

export default PlutomierzContainer;