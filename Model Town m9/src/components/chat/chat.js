import React, { useEffect } from 'react';



export const Chat = () => {
    useEffect(()=> {
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"201c228e412fbf7f872a5b6f835195c54","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            // s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    })
    return(
        <>
        </>
    );
}