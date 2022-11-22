import React from "react";
import { Row, Col } from "antd";

const items = [
    {
        key: '1',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'At vero eos et accusamus ducimus qui blanditiis.',
        content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.'
    },
    {
        key: '2',
        icon: <i className="fas fa-desktop"></i>,
        title: 'But I must explain to you how all this idea.',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
        key: '3',
        icon: <i className="fas fa-database"></i>,
        title: 'Contrary to popular belief, Lorem Ipsum is text.',
        content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.'
    }
]
const AppAbout = () => {
    return (
        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us </h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="contentHolder">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                </div>
                <Row gutter={[16, 16]}>
                    {
                        items.map((itemv, i) => {
                            return (
                                <Col span={8} key={itemv.key}>
                                    <div className="content">
                                        <div className="icon">
                                            {itemv.icon}
                                        </div>
                                        <h3>{itemv.title}</h3>
                                        <p>{itemv.content}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}
export default AppAbout