import {
    WhatsAppOutlined,
    InfoCircleOutlined,
    MailOutlined,
    SendOutlined,
} from "@ant-design/icons";
import React from "react";
import { FloatButton } from "antd";

const FAB = () => {
    return (
        <>
            <FloatButton.Group
                trigger="click"
                type="primary"
                className="right-6 bottom-6 md:right-12 md:bottom-12"
                icon={<InfoCircleOutlined />}
            >
                <FloatButton
                    icon={<WhatsAppOutlined />}
                    href="https://wa.me/+6285121045083"
                />
                <FloatButton
                    icon={<MailOutlined />}
                    href="mailto:info@ssgroup.id"
                />
                <FloatButton
                    icon={<SendOutlined />}
                    href="https://maps.app.goo.gl/Hi4hXLNqtX7kMeWQA"
                />
            </FloatButton.Group>
        </>
    );
};

export default FAB;
