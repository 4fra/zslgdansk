"use client"
import {useEffect, useState} from 'react';
import Link from 'next/link';
import {Burger, Container, Flex, Group, Text} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './Header.module.css';
import PlutaLogo from '@/components/PlutaLogo/PlutaLogo';
import {usePathname} from 'next/navigation';


const links = [
    {link: '/', label: 'Strona główna'},
    {link: '/plutomierz', label: 'Darmowy Plutomierz'},
];

export default function Header() {
    const pathname = usePathname();
    const [opened, {toggle}] = useDisclosure(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        setActive(pathname);
    }, [pathname]);

    const items = links.map((link) => (
        <Link
            className={classes.link}
            key={link.label}
            href={link.link}
            data-active={active === link.link || undefined}
            onClick={() => setActive(link.link)}
            passHref
        >
            {link.label}
        </Link>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                {opened ? (
                        <Group gap={5} hiddenFrom="xs">
                            {items}
                        </Group>
                    )
                    : (
                        <Flex className={classes.logoTextContainer} direction={'row'} align={'center'} gap={'md'}>
                            <PlutaLogo h={48}/>
                            <Text size={'md'}>Zachowajmy Spokój i Logikę</Text>
                        </Flex>
                    )}
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" aria-label={'toggle-navigation'}/>
            </Container>
        </header>
    );
}