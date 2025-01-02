"use client"
import React, {useEffect, useState} from 'react';
import {Container, Loader} from '@mantine/core';
import GradientCircularProgressbar from '../GradientCircularProgressbar/GradientCircularProgressbar';

const Plutomierz: React.FC = () => {
    const [plutaValue, setPlutaValue] = useState<number | null>(null);

    useEffect(() => {
        const ws = new WebSocket('wss://api.plutomierz.ovh');

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setPlutaValue(data.value);
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <Container size="xs" style={{textAlign: 'center', marginTop: '20px', minHeight: '50vh'}}>
            {plutaValue !== null && plutaValue !== undefined ? (
                <GradientCircularProgressbar
                    value={plutaValue * 2}
                    text={`${plutaValue}`}
                />
            ) : (
                <Loader size="xl" mt="md"/>
            )}
        </Container>
    );
};

export default Plutomierz;