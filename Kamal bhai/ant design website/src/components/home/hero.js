import React from "react";
import { Carousel, Button, Space } from 'antd';


const items = [
    {
        key: '1',
        title: 'At vero eos et accusamus ducimus qui blanditiis.',
        content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.'
    },
    {
        key: '2',
        title: 'But I must explain to you how all this idea.',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
        key: '3',
        title: 'Contrary to popular belief, Lorem Ipsum is text.',
        content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.'
    }
]

function AppHero() {
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div className="heroBlock">
            <Carousel>
                {
                    items.map((itemv, i) => {
                        return (
                            <div key={i} className="container-fluid">
                                <div className="content">
                                    <h3 >{itemv.title}</h3>
                                    <p>{itemv.content}</p>
                                    <div className="btnHolder">
                                        <Button type="primary" size="large">Learn More</Button>
                                        <Button size="large"> <i className="fas fa-desktop"></i>  Watch a Demo</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
export default AppHero