"use client"
import {Button} from '@mantine/core';
import {useRouter} from 'next/navigation';

interface RedirectButtonProps {
    to: string;
}

export default function RedirectButton({to}: RedirectButtonProps) {
    const {push} = useRouter();
    return (
        <Button
            radius="xl"
            size="md"
            mt={30}
            onClick={() => push(to)}
        >
            Dowiedz się więcej
        </Button>
    );
}