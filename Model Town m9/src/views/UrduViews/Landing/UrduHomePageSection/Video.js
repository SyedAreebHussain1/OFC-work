import React, { useState } from 'react';
import { Row, Button } from 'reactstrap';
import ModalVideo from 'react-modal-video'
import play from "assets/img/play3.png"


export const Video = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="AdboEnX-dxs" onClose={() => setOpen(false)} />
            <button className="" onClick={() => setOpen(true)}>
                <img src={play} width="100px"/>
            </button>
        </div>
    )
}