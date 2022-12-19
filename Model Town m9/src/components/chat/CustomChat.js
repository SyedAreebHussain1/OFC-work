import React from 'react';
import ChatBot from 'react-simple-chatbot';



export const CustomChat = () => {
    const steps = [
        {
            id: '0',
            message: 'Welcome to react chatbot!',
            trigger: '1',
        },
        {
            id: '1',
            message: 'Bye!',
            end: true,
        },
    ];
    return (
        <>
            <ChatBot
                headerTitle="Speech Synthesis"
                speechSynthesis={{ enable: true, lang: 'en' }}
                steps={steps}
            />
        </>
    );
}