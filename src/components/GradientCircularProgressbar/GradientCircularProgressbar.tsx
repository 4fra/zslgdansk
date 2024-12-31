"use client"
import React from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {GradientCircularProgressbarProps} from './types/GradientCircularProgressbarProps';

const GradientCircularProgressbar: React.FC<GradientCircularProgressbarProps> = ({value, text}) => {
    const isNegative = value < 0;
    const displayValue = Math.abs(value);

    return (
        <div>
            <svg style={{height: 0}}>
                <defs>
                    <linearGradient id="gradientColors" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="#3e98c7"/>
                        <stop offset="100%" stopColor="#f88"/>
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
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}
            />
        </div>
    );
};

export default GradientCircularProgressbar;