import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import history from '~/services/history';

import { Container, Meetup } from './styles';
import { loadMeetUpRequest } from '~/store/modules/meetup/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    dispatch(loadMeetUpRequest());
  }, [dispatch]);

  function handleDetails(meetup_id) {
    history.push(`/details/${meetup_id}`);
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/meetup/new">
          <div>
            <MdAddCircleOutline size={24} color="#FFF" />
          </div>
          Novo meetup
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <strong>{meetup.title}</strong>
            <aside>
              <span>{meetup.dateFormatted}</span>
              <button type="button">
                <MdChevronRight
                  size={24}
                  color="#FFF"
                  onClick={() => handleDetails(meetup.id)}
                />
              </button>
            </aside>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
