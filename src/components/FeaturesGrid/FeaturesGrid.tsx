import {TablerIcon} from '@tabler/icons-react';
import {Container, SimpleGrid, Text, ThemeIcon, Title} from '@mantine/core';
import classes from './FeaturesGrid.module.css';
import FeaturesData from '@/components/FeaturesGrid/data/FeaturesData';
import React from "react";

interface FeatureProps {
    icon: TablerIcon;
    title: React.ReactNode;
    description: React.ReactNode;
    style?: React.CSSProperties;
}

export function Feature({icon: Icon, title, description, style}: FeatureProps) {
    return (
        <Container style={style}>
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon width={18} height={18} stroke={"1.5"}/>
            </ThemeIcon>
            <Text mt="sm" mb={7}>
                {title}
            </Text>
            <Text size="sm" c="dimmed" lh={1.6}>
                {description}
            </Text>
        </Container>
    );
}

export function FeaturesGrid() {
    return (
        <Container className={classes.wrapper} id={"features"}>
            <Title className={classes.title}>Moje postulaty</Title>

            <Container size={560} p={0}>
                <Text size="sm" className={classes.description}>
                    One są faktycznie możliwe do zrealizowania!
                </Text>
            </Container>

            <SimpleGrid
                mt={60}
                cols={{base: 1, xs: 2, md: 4}}
                spacing={{base: 'xl', md: 50}}
                verticalSpacing={{base: 'xl', md: 50}}
            >
                {FeaturesData.map((feature, index) => (
                    <Feature key={index} {...feature} />
                ))}
            </SimpleGrid>
        </Container>
    );
}