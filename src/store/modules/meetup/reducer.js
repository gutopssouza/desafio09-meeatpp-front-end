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

      case '@meetup/ADD_MEET_UP': {
        draft.meetups.push(action.payload.meetup);
        break;
      }
      case '@meetup/UPDATE_MEET_UP_SUCCESS': {
        const id = draft.meetups.findIndex(
          m => m.id === action.payload.meetup.id
        );
        console.tron.log(id);
        draft.meetups[id] = action.payload.meetup;
        break;
      }

      case '@meetup/MEET_UP_FAILED': {
        break;
      }
      default:
    }
  });
}
