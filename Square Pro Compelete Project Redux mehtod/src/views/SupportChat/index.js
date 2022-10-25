import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";

import ChatSidebar from "./components/ChatSidebar";
import ChatHeader from "./components/ChatHeader";
import ChatBox from "./components/ChatBox";
import {
  getSupportConversationAction,
  getSupportConversationByIdAction,
  sendSupportChatByAdminAction,
} from "../../store/actions/chatActions";
import { GET_SUPPORT_CONVERSATION_BY_ID_SUCCESS } from "../../constants/chatConstants";

const SupportChat = () => {
  const dispatch = useDispatch();
  const { allSupportConversation, supportConversationById } = useSelector(
    (state) => state.chatReducer
  );
  const [userId, setUserId] = useState(null);
  const [messages, setMessages] = useState([]);

  const onSuccess = ({ data }) => {
    dispatch(getSupportConversationByIdAction(data.conversationId));
  };
  const onFailure = (error) => {};

  const handleGetUserData = (id) => {
    setUserId(id);
    setMessages([]);
    dispatch({ type: GET_SUPPORT_CONVERSATION_BY_ID_SUCCESS, payload: null });
    dispatch(getSupportConversationByIdAction(id));
  };

  const handleNewMessage = (text) => {
    setMessages(text);
  };

  const handleSendMessage = (text, id, setSendMessage) => {
    let body = {
      conversationId: id,
      messageType: "TEXT",
      message: text,
      sentBy: "ADMIN",
    };
    // setMessages([]);
    // dispatch({ type: GET_SUPPORT_CONVERSATION_BY_ID_SUCCESS, payload: null });
    dispatch(sendSupportChatByAdminAction(body, onSuccess, onFailure));
    setSendMessage(null);
  };

  useEffect(() => {
    dispatch(getSupportConversationAction(1, 10000));
    // dispatch({ type: GET_SUPPORT_CONVERSATION_BY_ID_SUCCESS, payload: null });
  }, [dispatch]);

  useEffect(() => {
    if (
      supportConversationById?.supportChat !== undefined &&
      supportConversationById?.supportChat !== null
    ) {
      setMessages(
        JSON.parse(JSON.stringify(supportConversationById?.supportChat))
      );
    }
  }, [supportConversationById?.supportChat]);

  return (
    <Layout>
      <ChatSidebar
        allSupportConversation={allSupportConversation}
        handleGetUserData={handleGetUserData}
      />
      <Layout>
        <ChatHeader user={supportConversationById?.user} />
        <ChatBox
          messages={messages}
          userId={userId}
          setMessages={setMessages}
          handleNewMessage={handleNewMessage}
          handleSendMessage={handleSendMessage}
        />
      </Layout>
    </Layout>
  );
};

export default SupportChat;
