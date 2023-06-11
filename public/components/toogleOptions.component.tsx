"use client"
import React, {useState} from 'react';

export const DropdownButton = (props:{list: string[], title: string}) => {
    const [showOptions, setShowOptions] = useState(false);
    const ToggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div>
        <button onClick={ToggleOptions}>{props.title} v</button>
        {showOptions && (
            <ul>
                {props.list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )}
        </div>
    );
};