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

export function meetUpFailed() {
  return {
    type: '@meetup/MEET_UP_FAILED',
  };
}
