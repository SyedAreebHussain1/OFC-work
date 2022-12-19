import React from 'react';
import { FloatingButton, Item } from "react-floating-button";
import { CustomChat } from '../CustomChat';



export const ChatButton = () => {
    const Open = () => {
        return <CustomChat/>
    }
    return (
        <FloatingButton>
            {/* <Item
                // onClick={() => {
                //     console.log("callback function here");
                // }}
                onClick={Open}
                children = <>
                </>
                
            /> */}
            <Item
            />
           
        </FloatingButton>
    );
}