import React from "react";
import { PageHeader, Typography } from "antd";

const { Title } = Typography;

const ChatHeader = ({ user }) => {
  const fullName = `${user?.userProfile?.firstName} ${user?.userProfile?.lastName}`;
  const profilePictureUrl = user?.userProfile?.profilePictureUrl;

  if (profilePictureUrl === undefined) {
    return (
      <PageHeader
        style={{
          borderTopRightRadius: "8px",
          backgroundColor: "white",
        }}
      />
    );
  }
  return (
    <PageHeader
      title={
        <Title level={4}>
          {user === (null || undefined) ? "Select Chat" : fullName}
        </Title>
      }
      className="site-page-header"
      //   subTitle="Online"
      avatar={{
        src:
          user === (null || undefined) || profilePictureUrl === null
            ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            : profilePictureUrl,
        style: { width: 50, height: 50 },
      }}
      style={{
        borderTopRightRadius: "8px",
        backgroundColor: "white",
      }}
    />
  );
};

export default ChatHeader;
