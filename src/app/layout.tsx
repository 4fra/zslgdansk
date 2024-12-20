import {MantineProvider} from '@mantine/core';
import type {Metadata} from 'next';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '@mantine/core/styles.css';
import '@mantine/core/styles/global.css';
import theme from "@/theme";


export const metadata: Metadata = {
    title: 'ZSL Gdańsk',
    description: 'Zachowaj Spokój i Logikę Gdańsk',
};


export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
        <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
            <Header/>
            {children}
            <Footer/>
        </MantineProvider>
        </body>
        </html>
    );
}