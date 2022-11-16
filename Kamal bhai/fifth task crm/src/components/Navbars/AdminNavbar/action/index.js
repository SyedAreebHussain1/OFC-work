import {
  NOTIFICATIONS,
  NOTIFICATIONS_SUCCESS,
  NOTIFICATIONS_FAILURE,
  UPDATE_NOTIFICATIONS,
  UPDATE_NOTIFICATIONS_SUCCESS,
  UPDATE_NOTIFICATIONS_FAILURE,
  READ_NOTIFICATIONS,
  READ_NOTIFICATIONS_SUCCESS,
  READ_NOTIFICATIONS_FAILURE,
} from "../constant";

export class MeetingNotification {
  static Notification() {
    return {
      type: NOTIFICATIONS,
    };
  }
  static NotificationSuccess(response) {
    return {
      type: NOTIFICATIONS_SUCCESS,
      payload: response,
    };
  }
  static NotificationFailure(error) {
    return {
      type: NOTIFICATIONS_FAILURE,
      error,
    };
  }
}

export class UpdateNotification {
  static Update() {
    return {
      type: UPDATE_NOTIFICATIONS,
    };
  }
  static UpdateSuccess(response) {
    return {
      type: UPDATE_NOTIFICATIONS_SUCCESS,
      payload: response,
    };
  }
  static UpdateFailure(error) {
    return {
      type: UPDATE_NOTIFICATIONS_FAILURE,
      error,
    };
  }
}

export class ReadNotification {
  static Notification() {
    return {
      type: READ_NOTIFICATIONS,
    };
  }
  static NotificationSuccess(response) {
    return {
      type: READ_NOTIFICATIONS_SUCCESS,
      payload: response,
    };
  }
  static NotificationFailure(error) {
    return {
      type: READ_NOTIFICATIONS_FAILURE,
      error,
    };
  }
}
