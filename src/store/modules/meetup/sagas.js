import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';

import history from '~/services/history';
import api from '~/services/api';

import {
  loadMeetUpSuccess,
  meetUpFailed,
} from '~/store/modules/meetup/actions';

export function* loadMeetUp() {
  try {
    const response = yield call(api.get, 'organizing');

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const data = response.data.map(meetup => {
      const date = utcToZonedTime(meetup.date, timezone);

      const dateFormatted = format(date, "d 'de' MMMM ', às ' H'h'", {
        locale: pt,
      });

      return {
        dateFormatted,
        ...meetup,
      };
    });

    yield put(loadMeetUpSuccess(data));
  } catch (err) {
    toast.error('Erro ao carregar seus meetups');
    yield put(meetUpFailed());
  }
}

export default all([takeLatest('@meetup/LOAD_MEET_UP_REQUEST', loadMeetUp)]);
