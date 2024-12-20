"use client"
import {useState} from 'react';
import {Burger, Container, Flex, Group, Text} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './Header.module.css';
import PlutaLogo from "@/components/PlutaLogo/PlutaLogo";

const links = [
    {link: '/', label: 'Strona główna'},
    {link: '/secrets', label: 'Tajemnice Pluty'},
];

export default function Header() {
    const [opened, {toggle}] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Flex className={classes.logoTextContainer} direction={"row"} align={"center"} gap={"md"}>
                    <PlutaLogo h={48}/>
                    <Text size={"md"}>Zachowajmy Spokój i Logikę</Text>
                </Flex>
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm"/>
            </Container>
        </header>
    );
}