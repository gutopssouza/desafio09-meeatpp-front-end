export function loadMeetUpRequest() {
  return {
    type: '@meetup/LOAD_MEET_UP_REQUEST',
  };
}

export function loadMeetUpSuccess(meetups) {
  return {
    type: '@meetup/LOAD_MEET_UP_SUCCESS',
    payload: { meetups },
  };
}

export function addMeetUp(meetup) {
  return {
    type: '@meetup/ADD_MEET_UP',
    payload: { meetup },
  };
}

export function updateMeetUpRequest(id, data) {
  return {
    type: '@meetup/UPDATE_MEET_UP_REQUEST',
    payload: { id, data },
  };
}

export function updateMeetUpSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEET_UP_SUCCESS',
    payload: { meetup },
  };
}

export function meetUpFailed() {
  return {
    type: '@meetup/MEET_UP_FAILED',
  };
}
