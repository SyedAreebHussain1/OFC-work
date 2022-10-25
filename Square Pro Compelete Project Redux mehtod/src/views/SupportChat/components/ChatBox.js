import React, { useEffect, useRef, useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Layout, Input, Button, Empty } from "antd";
import io from "socket.io-client";
import moment from "moment";

import { SOCKET_URL } from "../../../config/url";

const { Content } = Layout;

const userText = {
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  maxWidth: "60%",
  minWidth: "200px",
  // display: "block",
  // width: "100%",
  borderRadius: "12px",
  boxShadow: " 0px 3px 16px 4px rgba(0,0,0,0.09)",
  minHeight: "60px",
  padding: "7px",
  fontSize: "17px",
  marginBottom: "15px",
  overflowWrap: "break-word",
  // float: "left",
  clear: "left",
};
const myText = {
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  alignItems: "flex-end",
  maxWidth: "60%",
  // width: "100%",
  // height: "auto",
  borderRadius: "15px",
  boxShadow: "  0px 3px 16px 4px rgba(0,0,0,0.09)",
  minHeight: "50px",
  padding: "7px",
  fontSize: "17px",
  marginBottom: "10px",
  backgroundColor: "#013361",
  color: "white",
  marginLeft: "auto",
  overflowWrap: "break-word",
};

const ChatBox = ({ messages, userId, handleNewMessage, handleSendMessage }) => {
  let adminId = JSON.parse(localStorage.getItem("adminProfile"))?.id;

  const SERVER = SOCKET_URL;
  let socket = io(SERVER);
  const messagesEndRef = useRef(null);

  const [text, setText] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({
      behavior: "instant",
      block: "nearest",
      inline: "start",
    });
  };

  useEffect(() => {
    setSendMessage(null);
    function handler(payload) {
      let msg = payload.messageData.message.supportChat;
      setText(msg);
    }

    socket.on(`newSupportChat-${userId}-${adminId}`, handler);

    return () => socket.off(`newSupportChat-${userId}-${adminId}`, handler);
  }, [userId]);

  useEffect(() => {
    if (text) {
      let newArr = [...messages, ...text];
      handleNewMessage(newArr);
    }
  }, [text]);

  useEffect(scrollToBottom);

  if (messages.length === 0) {
    return (
      <div
        style={{
          padding: 24,
          height: 545,
          backgroundColor: "white",
          borderBottomRightRadius: "8px",
        }}
      >
        <Empty
          image={Empty.PRESENTED_IMAGE_DEFAULT}
          description={"No Chat Selected"}
        />
      </div>
    );
  }
  return (
    <Content
      style={{
        margin: "4px 0px 0px 0px",
      }}
    >
      <div>
        <div
          style={{
            padding: 24,
            height: 400,
            backgroundColor: "white",
            borderBottomRightRadius: "8px",
            overflowY: "auto",
          }}
        >
          {messages?.map((chat, index) => {
            return (
              <div
                key={index}
                ref={messagesEndRef}
                style={chat.sentBy === "USER" ? userText : myText}
              >
                <div>{chat.message}</div>
                <div
                  style={{
                    marginLeft: "auto",
                    width: "auto",
                    maxWidth: "100px",
                    fontSize: "12px",
                    color: "lightgrey",
                    marginTop: "3px",
                  }}
                >
                  {moment(chat.createdAt).fromNow()}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
        <div
          style={{
            padding: 20,
            // minHeight: 360,
            backgroundColor: "white",
            borderBottomRightRadius: "10px",
            // overflowY: "scroll",
            //   borderRadius: "5px",
          }}
        >
          <Input.Group compact>
            <Input
              onChange={(e) => setSendMessage(e.target.value)}
              onPressEnter={() =>
                sendMessage !== null
                  ? handleSendMessage(sendMessage, userId, setSendMessage)
                  : ""
              }
              value={sendMessage}
              style={{
                width: "calc(100% - 100px)",
                borderRadius: "10px",
                backgroundColor: "ghostwhite",
                height: "40px",
              }}
              placeholder="Type message..."
            />
            <Button
              onClick={() =>
                handleSendMessage(sendMessage, userId, setSendMessage)
              }
              style={{
                backgroundColor: "#013361",
                color: "white",
                borderRadius: "50px",
                marginLeft: "5px",
              }}
              disabled={sendMessage === null}
              icon={<ArrowRightOutlined />}
              size="large"
            />
          </Input.Group>
        </div>
      </div>
    </Content>
  );
};

export default ChatBox;
