import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import img from '../images/commision.jpg'
import bannerVideo from "../images/homevideo.m4v";
class VideoBanner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return (
            <div style={{
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                scrollBehavior: 'smooth',
            }}>
                <video style={{ width: '100%' }} className='videoTag' autoPlay loop muted>
                    <source src={bannerVideo} type='video/mp4' />
                </video>
            </div>)
    }
}

export default VideoBanner