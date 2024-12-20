import {IconCheck} from '@tabler/icons-react';
import {Container, Image, List, ListItem, Text, ThemeIcon} from '@mantine/core';
import styles from './HeroBullets.module.css';
import texts from './data/texts';
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle';
import ScrollButton from "@/components/ScrollButton/ScrollButton";

interface HeroBulletsProps {
    targetId: string;
}

export default function HeroBullets({targetId}: HeroBulletsProps) {
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

                    <ScrollButton styles={styles} targetId={targetId}/>
                </div>
                <Image src={"/pdwface.png"} alt={"Robert Kibica"} className={styles.image}/>
            </div>
        </Container>
    );
}