import {Container, Text, Title} from "@mantine/core";
import {postulates} from "@/app/postulaty/data/postulates";
import Postulate from "@/components/Postulate/Postulate";
import classes from './page.module.css';

export default function Page() {
    return (
        <Container className={classes.inner}>
            <Title>Pełne postulaty</Title>
            <Text mb={30}>Franciszka Grzywaczewskiego, kandydata na przewodniczącego SU ZSŁ w Gdańsku</Text>
            {postulates.map((postulate, index) => (
                <Postulate key={index} title={postulate.title} description={postulate.description}/>
            ))}
        </Container>
    );
}