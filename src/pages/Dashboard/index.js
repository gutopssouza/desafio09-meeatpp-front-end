import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const date = new Date();

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing', {});

      const data = response.data.map(meetup => {
        const dateFormatted = format(
          parseISO(meetup.date),
          "d 'de' MMMM', ás' HH'h'",
          {
            locale: pt,
          }
        );

        return {
          ...meetup,
          formattedDate: dateFormatted,
        };
      });

      setMeetups(data);
    }

    loadMeetups();
  }, [date]);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button">
          <div>
            <MdAddCircleOutline size={24} color="#FFF" />
          </div>
          Novo meetup
        </button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <strong>{meetup.title}</strong>
            <aside>
              <span>{meetup.formattedDate}</span>
              <button type="button">
                <MdChevronRight size={36} color="#FFF" />
              </button>
            </aside>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
