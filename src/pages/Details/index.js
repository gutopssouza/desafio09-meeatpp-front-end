import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import history from '~/services/history';

import { Container, Banner } from './styles';

export default function Details({ match }) {
  const dispatch = useDispatch();
  const { meetup_id } = match.params;
  const meetup = useSelector(state =>
    state.meetup.meetups.find(m => String(m.id) === meetup_id)
  );

  function handleEdit(id) {
    history.push(`/meetup/${id}`);
  }

  console.tron.log(meetup);

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <button
            id="btEdit"
            type="button"
            onClick={() => handleEdit(meetup.id)}
          >
            <MdEdit size={20} color="#FFF" />
            Editar
          </button>
          <button id="btCancel" type="button">
            <MdDeleteForever size={20} color="#FFF" />
            Cancelar
          </button>
        </div>
      </header>
      <Banner>
        {meetup.banner ? (
          <img src={meetup.banner.url} alt="banner" />
        ) : (
          <span>Imagem não encontrada...</span>
        )}
      </Banner>
      <p>{meetup.description}</p>
      <footer>
        <span>
          <MdEvent size={20} />
          {meetup.dateFormatted}
        </span>
        <span>
          <MdPlace size={20} />
          {meetup.location}
        </span>
      </footer>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetup_id: PropTypes.string,
    }),
  }).isRequired,
};
