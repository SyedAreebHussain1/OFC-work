import axios from "axios";
import {
  MeetingNotification,
  UpdateNotification,
  ReadNotification,
} from "../action";
import {
  NOTIFICATIONS_PATH,
  UPDATE_NOTIFICATIONS_PATH,
  READ_NOTIFICATIONS_PATH,
} from "../constant";
import { BASEURL } from "../../../../config/api/URL";

export const CheckNotification = (body, onSuccess, onFailure) => (dispatch) => {
  dispatch(MeetingNotification.Notification());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${NOTIFICATIONS_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(MeetingNotification.NotificationSuccess(res.data));

        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(MeetingNotification.NotificationFailure(res.data.message));

        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(MeetingNotification.NotificationFailure(error)));
};

export const UpdateNotificationStatus =
  (body, onSuccess, onFailure) => (dispatch) => {
    dispatch(UpdateNotification.Update());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${UPDATE_NOTIFICATIONS_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(UpdateNotification.UpdateSuccess(res.data.response));

          dispatch(onSuccess(res.data.message));
        } else {
          dispatch(UpdateNotification.UpdateFailure(res.data.message));

          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(UpdateNotification.UpdateFailure(error)));
  };

export const ReadNotificationAction = (onSuccess, onFailure) => (dispatch) => {
  dispatch(ReadNotification.Notification());
  let token = localStorage.getItem("auth");
  axios
    .put(
      `${BASEURL}${READ_NOTIFICATIONS_PATH}`,
      { body: null },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    )
    .then((res) => {
      if (res.data.status === true) {
        dispatch(ReadNotification.NotificationSuccess(res.data));

        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(ReadNotification.NotificationFailure(res.data.message));

        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(ReadNotification.NotificationFailure(error)));
};
