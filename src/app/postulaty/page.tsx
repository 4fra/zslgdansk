import {Container, SimpleGrid} from "@mantine/core";
import {postulates} from "@/app/postulaty/data/postulates";
import Postulate from "@/components/Postulate/Postulate";

export default function Page() {
    return (
        <Container>
            <SimpleGrid
                cols={{base: 1, lg: 2}}
                spacing={{base: 5, lg: 'xs'}}
                verticalSpacing={{base: 'md', lg: 'xl'}}
            >
                {postulates.map((postulate, index) => (
                    <Postulate key={index} title={postulate.title} description={postulate.description}/>
                ))}
            </SimpleGrid>
        </Container>
    );
}