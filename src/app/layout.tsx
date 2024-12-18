import {MantineProvider} from '@mantine/core';
import type {Metadata} from 'next';
import Header from '../components/Header/Header';
import '@mantine/core/styles.css';
import '@mantine/core/styles/global.css';

export const metadata: Metadata = {
    title: 'ZSL Gdańsk',
    description: 'Zachowaj Spokój i Logikę Gdańsk',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
        <body>
        <MantineProvider defaultColorScheme="dark">
            <Header/>
            {children}
        </MantineProvider>
        </body>
        </html>
    );
}