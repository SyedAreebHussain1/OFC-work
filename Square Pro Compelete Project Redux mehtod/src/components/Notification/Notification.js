import React, { useState, useEffect } from "react";
import { notification } from "antd";
import NotificationSound from "../../assets/sounds/notification-sound.mp3";
import { onMessageListener } from "../../config/firebase";
import { useRef } from "react";

const Notification = () => {
  const [notificationData, setNotificationData] = useState({
    title: "",
    body: "",
  });
  const audioPlayer = useRef(null);
  const openNotification = () => {
    notification.open({
      message: notificationData?.title,
      description: notificationData?.body,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
    playAudio();
  };
  function playAudio() {
    audioPlayer.current.play();
  }

  useEffect(() => {
    if (notificationData?.title) {
      openNotification();
    }
  }, [notificationData]);

  // requestForToken();

  onMessageListener()
    .then((payload) => {
      setNotificationData({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <>
      <audio ref={audioPlayer} src={NotificationSound} />
    </>
  );
};

export default Notification;
