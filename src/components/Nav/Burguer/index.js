import React, { useState } from 'react';
import Links from 'next/link';

import NavItemsContainer from '../../NavItemsContainer';
import Modal from '../../Modal';

import { Container, Row, Btn, ContainerModal, Ul, Li } from './styles';

export default function Burguer() {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(!modal);
  }
  return (
    <Container>
      <Btn isActive={modal} onClick={handleModal}>
        <Row />
        <Row />
        <Row />
      </Btn>
      <ContainerModal isActive={modal}>
        <Modal isBurguer onclick={() => handleModal()}>
          <NavItemsContainer>
            <Btn onClick={handleModal}>
              <Row />
              <Row />
              <Row />
            </Btn>
            <Ul>
              <Li select>
                <Links href="/store">
                  <a>Sign in</a>
                </Links>
                <img src="/nav/arrow.png" alt="arrow" />
              </Li>
              <Li>
                <Links href="/store">
                  <a>WOMEN</a>
                </Links>
                <img src="/nav/arrow.png" alt="arrow" />
              </Li>
              <Li>
                <Links href="/store">
                  <a>PLUS + CURVER</a>
                </Links>
                <img src="/nav/arrow.png" alt="arrow" />
              </Li>
              <Li>
                <Links href="/store">
                  <a>MEN</a>
                </Links>
                <img src="/nav/arrow.png" alt="arrow" />
              </Li>

              <Li>
                <Links href="/store">
                  <a>GIRLS</a>
                </Links>
                <img src="/nav/arrow.png" alt="arrow" />
              </Li>
              <Li>
                <Links href="/store">
                  <a>BEAUTY BY ...</a>
                </Links>
                <img src="/nav/arrow.png" alt="arrow" />
              </Li>
              <Li>
                <Links href="/store">
                  <a>SALE</a>
                </Links>
                <img src="/nav/arrow.png" alt="arrow" />
              </Li>
              <Li>
                <Links href="/store">
                  <a>FINAL</a>
                </Links>
                <img src="/nav/arrow.png" alt="arrow" />
              </Li>
            </Ul>
          </NavItemsContainer>
        </Modal>
      </ContainerModal>
    </Container>
  );
}
