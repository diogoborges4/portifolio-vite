// src/components/TypingEffect.tsx
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
    text: string;
    speed?: number;
    disableCursor?: boolean;
    delay?: number
}

const TypingEffect: React.FC<TypingEffectProps> = (props) => {
    const [displayedText, setDisplayedText] = useState('');
    const [showCursor, setShowCursor] = useState(false);

    const writeInScreen = (text: string, i = 0) => {
        if (i < text.length) {
            setShowCursor(true)

            setDisplayedText(text.slice(0, i + 1));
            setTimeout(() => writeInScreen(text, i + 1), 100)
        } else if (i >= text.length && props?.disableCursor) {
            setShowCursor(false)
        }
    };

    useEffect(() => {
        setTimeout(() => writeInScreen(props.text), props?.delay ?? 200)
    }, [])

    return (
        <div>
            {displayedText}
            {showCursor && (
                <span className='animate-animar-cursor text-xl md:text-2xl'>
                    |
                </span>
            )}
        </div>
    )
};

export default TypingEffect;
