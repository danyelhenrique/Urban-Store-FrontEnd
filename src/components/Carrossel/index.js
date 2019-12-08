import React from 'react';

import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';

import { Container, Arrow, BtnPrev, BtnNext } from './styles';

export default function Carrossel() {
    return (
        <Container>
            <CarouselProvider
                naturalSlideWidth={90}
                naturalSlideHeight={90}
                totalSlides={8}
                visibleSlides={2}
                step={1}
                hasMasterSpinner
                infinite
            >
                <Slider>
                    <Slide index={0}><Image src="/boy.jpg" /></Slide>
                    <Slide index={1}><Image src="/girl.jpg" /></Slide>
                    <Slide index={2}> <Image src="/boy.jpg" /></Slide>
                    <Slide index={3}><Image src="/girl.jpg" /></Slide>

                    <Slide index={4}><Image src="/boy.jpg" /></Slide>
                    <Slide index={5}><Image src="/girl.jpg" /></Slide>
                    <Slide index={6}> <Image src="/boy.jpg" /></Slide>
                    <Slide index={7}><Image src="/girl.jpg" /></Slide>
                </Slider>
                <Arrow>
                    <BtnPrev><img src="/arrow.png" alt="Prev" /></BtnPrev>
                    <BtnNext><img src="/arrow.png" alt="Next" /></BtnNext>
                </Arrow>
            </CarouselProvider>
        </Container>
    );
}
