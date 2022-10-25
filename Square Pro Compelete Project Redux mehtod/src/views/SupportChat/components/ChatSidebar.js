import React, { useEffect, useState } from "react";
import { Layout, Menu, Avatar, Image, Badge } from "antd";

const { Sider } = Layout;

const ChatSidebar = ({ allSupportConversation, handleGetUserData }) => {
  const [supportConversations, setSupportConversations] = useState([]);

  useEffect(() => {
    if (allSupportConversation?.items) {
      setSupportConversations(allSupportConversation.items);
    }
  }, [allSupportConversation]);

  return (
    <Sider
      style={{
        backgroundColor: "#013361",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
      }}
      className="chat-sider"
      width={300}
    >
      <div className="logo" />
      <Menu
        theme="light"
        mode="inline"
        style={{
          height: "95%",
          margin: "10px 20px 0px 20px",
          width: "260px",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
          overflow: "hidden",
        }}
      >
        {supportConversations?.map((user) => {
          console.log(user);
          const fullName = `${user?.user?.userProfile?.firstName} ${user?.user?.userProfile?.lastName}`;
          const profilePictureUrl = user?.user?.userProfile?.profilePictureUrl;
          return (
            <Menu.Item key={user.id} onClick={() => handleGetUserData(user.id)}>
              <Avatar
                src={
                  <Image
                    src={
                      profilePictureUrl ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    }
                    style={{
                      width: 32,
                    }}
                  />
                }
              />
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                {fullName}
              </span>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default ChatSidebar;
