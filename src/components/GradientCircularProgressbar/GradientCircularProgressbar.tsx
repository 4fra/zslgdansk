"use client"
import React from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {GradientCircularProgressbarProps} from './types/GradientCircularProgressbarProps';
import {useMantineTheme} from '@mantine/core';

const GradientCircularProgressbar: React.FC<GradientCircularProgressbarProps> = ({value, text}) => {
    const theme = useMantineTheme();
    const isNegative = value < 0;
    const displayValue = Math.abs(value);

    return (
        <div>
            <svg style={{height: 0}}>
                <defs>
                    <linearGradient id="gradientColors" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor={theme.colors.red[5]}/>
                        <stop offset="100%" stopColor={theme.colors.red[6]}/>
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgressbar
                value={displayValue}
                text={text}
                counterClockwise={isNegative}
                styles={buildStyles({
                    textSize: '16px',
                    pathColor: 'url(#gradientColors)',
                    textColor: theme.colors.red[6],
                    trailColor: theme.colors.gray[4],
                    backgroundColor: theme.colors.blue[6],
                })}
            />
        </div>
    );
};

export default GradientCircularProgressbar;