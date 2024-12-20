"use client"
import {Button, Group} from '@mantine/core';

interface ScrollButtonProps {
    styles: { [key: string]: string };
    targetId: string;
}

export default function ScrollButton({styles, targetId}: ScrollButtonProps) {
    const scrollToElement = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth', block: 'end'});
        }
    };

    return (
        <Group mt={30}>
            <Button
                radius="xl"
                size="md"
                className={styles.control}
                onClick={scrollToElement}
            >
                Dowiedz się więcej
            </Button>
        </Group>
    );
}