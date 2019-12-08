import React from 'react';

import { Container, Links, LinksContainer, FullHeightContainer, Span } from './styles';

const full = true

function fullSidebar() {
    if (!full) {
        return (
            <Span>
                <span>Clothes  for all types of styles</span>
            </Span>)
    }
    return (
        <FullHeightContainer>
            <span>Clothes  for all types of styles</span>
            <nav>
                <li>
                    <a href="">Wommen's</a>
                    <a href="">Men's</a>
                    <a href="">Baby</a>
                    <a href="">Girls</a>
                    <a href="">Boys</a>
                </li>
            </nav>
            <img src="/boy.jpg" alt="boy" />
            <img src="/girl.jpg" alt="girl" />
        </FullHeightContainer>
    )
}

export default function SidebarHome() {
    return (
        <Container active={full}>
            <Links>
                <div>
                    <img src="/logo.png" alt="logo" />
                </div>
                <LinksContainer>
                    <a href="#/">Shopping</a>
                </LinksContainer>
                <LinksContainer>
                    <a href="#/">Contact</a>
                </LinksContainer>
            </Links>
            {fullSidebar()}

        </Container>
    );
}
