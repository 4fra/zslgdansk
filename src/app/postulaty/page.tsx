import {Container, Title} from "@mantine/core";
import {postulates} from "@/app/postulaty/data/postulates";
import Postulate from "@/components/Postulate/Postulate";
import classes from './page.module.css';

export default function Page() {
    return (
        <Container className={classes.inner}>
            <Title mb={30}>Moje postulaty</Title>
            {postulates.map((postulate, index) => (
                <Postulate key={index} title={postulate.title} description={postulate.description}/>
            ))}
        </Container>
    );
}