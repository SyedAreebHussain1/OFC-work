import React, { useState } from "react";
import { Button, Modal } from 'antd';

const AppWorks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h1>How it work</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
                <div className="contentHolder">
                    <Button onClick={showModal}>
                        <i className="fas fa-play"></i>
                    </Button>
                </div>
                <Modal title="Areeb Modal" open={isModalOpen}
                    // onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}>
                    <iframe title="Code with Bibek" height='350' width='100%' src="https://www.youtube.com/watch?v=1uXlLsSmdVA&list=PLiUrl-SQRR7LM5cw7azA2H_FZwFx2UgkI&index=2"></iframe>
                </Modal>

            </div>
        </div>
    )
}
export default AppWorks