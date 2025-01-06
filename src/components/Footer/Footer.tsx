import {Anchor, Container, Flex, Text} from '@mantine/core';
import classes from './Footer.module.css';

export default function Footer() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Flex className={classes.logoTextContainer} direction={'row'} align={'center'} gap={'md'}>
                    <Text>Skontaktuj się ze mną na Discord: <span className={classes.highlight}>404fra</span></Text>
                </Flex>

                <div className={classes.linksContainer}>
                    <Anchor href="https://github.com/4fra" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </Anchor>
                    <Anchor href="https://www.youtube.com/@RobertKibica" target="_blank" rel="noopener noreferrer">
                        Jutuba
                    </Anchor>
                    <Anchor href="https://www.instagram.com/robertkibica/" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </Anchor>
                </div>

            </Container>
        </div>
    );
}