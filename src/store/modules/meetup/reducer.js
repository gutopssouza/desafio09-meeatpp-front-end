import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_MEET_UP_SUCCESS': {
        draft.meetups = action.payload.meetups;
        break;
      }

      case '@meetup/MEET_UP_FAILED': {
        break;
      }
      default:
    }
  });
}
