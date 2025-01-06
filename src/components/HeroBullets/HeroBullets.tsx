import {IconCheck} from '@tabler/icons-react';
import {Container, Image, List, ListItem, Text, ThemeIcon} from '@mantine/core';
import styles from './HeroBullets.module.css';
import texts from './data/texts';
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle';
import RedirectButton from "@/components/RedirectButton/RedirectButton";

export default function HeroBullets() {
    return (
        <Container size="md">
            <div className={styles.inner}>
                <div className={styles.content}>
                    <AnimatedTitle texts={texts}/>
                    <Text c="dimmed" mt="md">
                        Postulaty Franciszka Grzywaczewskiego, znanego również jako <span className={styles.highlight}>Robert Kibica</span> -
                        kandydata na przewodniczącego SU ZSŁ w Gdańsku.
                    </Text>
                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck size={12} stroke={1.5}/>
                            </ThemeIcon>
                        }
                    >
                        <ListItem>Ochrona praw uczniów</ListItem>
                        <ListItem>Transparentny i sprawiedliwy SU</ListItem>
                        <ListItem>Nowoczesne rozwiązania technologiczne</ListItem>
                        <ListItem>Wsparcie dla wydarzeń uczniowskich</ListItem>
                        <ListItem>Lepsza komunikacja</ListItem>
                    </List>

                    <RedirectButton to="/postulaty"/>
                </div>
                <Image src={"/pdwmenel.jpg"} alt={"Robert Kibica"} className={styles.image}/>
            </div>
        </Container>
    );
}