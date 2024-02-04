import React from 'react';

type bgColor = "primary" | "success" | "error" | "secondary";

interface IProps {
    text: string;
    icon?: React.ReactNode;
    variant: string;
    disabled: boolean;
    dimension: string;
    bgColor: bgColor;
    hoverTextColor?: string;
    borderColor?: string;
}

const SubmitButton = ({ text, icon, variant, disabled, dimension, bgColor, hoverTextColor, borderColor }: IProps) => {
    let style = `font-bold py-2 px-4 rounded `;

    if (disabled) {
        style += 'opacity-50 cursor-not-allowed ';
    }

    // Add common style for the 'contained' variant
    if (variant === 'contained') {
        style += `text-white `;
    }

    // Add specific style based on bgColor
    switch (bgColor) {
        case 'primary':
            style += variant === 'outlined' ? 'text-blue-700 hover:bg-blue-500 border-blue-500 hover:text-white ' : 'bg-blue-500 hover:bg-blue-700 ';
            break;
        case 'success':
            style += variant === 'outlined' ? 'text-green-700 hover:bg-green-500 border-green-500 hover:text-white ' : 'bg-green-500 hover:bg-green-700 ';
            break;
        case 'error':
            style += variant === 'outlined' ? 'text-red-700 hover:bg-red-500 border-red-500 hover:text-white ' : 'bg-red-500 hover:bg-red-700 ';
            break;
        case 'secondary':
            style += variant === 'outlined' ? 'text-gray-700 hover:bg-gray-300 border-gray-300 hover:text-white ' : 'bg-gray-300 hover:bg-gray-400 ';
            break;
    }

    // Add 3D effect for 'contained' buttons
    if (variant === 'contained' && dimension === '3D') {
        style += 'border-b-4 ';
        switch (bgColor) {
            case 'primary':
                style += 'border-blue-700 hover:border-blue-500 ';
                break;
            case 'success':
                style += 'border-green-700 hover:border-green-500 ';
                break;
            case 'error':
                style += 'border-red-700 hover:border-red-500 ';
                break;
            case 'secondary':
                style += 'border-gray-700 hover:border-gray-500 ';
                break;
        }
    }

    return (
        <button className={style}>
            {icon && icon}
            <span>{text}</span>
        </button>
    );
}

export default SubmitButton;
