"use client"
import {useEffect, useState} from 'react';
import {Text, Transition} from '@mantine/core';
import classes from './AnimatedTitle.module.css';

interface AnimatedTitleProps {
    texts: string[];
}

export default function AnimatedTitle({texts}: AnimatedTitleProps) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setVisible(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [texts]);

    return (
        <Transition mounted={visible} transition="fade-down" duration={500} timingFunction="ease">
            {(styles) => (
                <Text style={styles} className={classes.title} autoCapitalize={"words"}>
                    {texts[currentTextIndex].split(' ').map((word, index) => (
                        <span key={index}> {word} <br/></span>
                    ))}
                </Text>
            )}
        </Transition>
    );
}
