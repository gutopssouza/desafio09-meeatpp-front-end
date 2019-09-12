import React from 'react';
import PropTypes from 'prop-types';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import { Container, Banner } from './styles';

export default function Details({ match }) {
  return (
    <Container>
      <header>
        <strong>Meetup React JS</strong>
        <div>
          <button id="btEdit" type="button">
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
        <span>Imagem não encontrada...</span>
      </Banner>
      <p>Descrição do meetup</p>
      <footer>
        <span>
          <MdEvent size={20} />
          24 de junho, ás 20h
        </span>
        <span>
          <MdPlace size={20} />
          Rua Paulo Bathke, São Joaquim
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
