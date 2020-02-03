import React from 'react';
import LazyLoad from 'react-lazyload';

import { Container, Image, Description, Quote } from './styles';

export default function Hero() {
  const url =
    'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  return (
    <Container>
      <LazyLoad height="100%">
        <Image src={url} />
      </LazyLoad>
      <Description>
        <Quote>
          <span>
            "I think the fashion is super serious and humor is suspect and
            people don't always know how to approach it. Sometimes people have
            questioned whether I was making fun of the industry or just at
            myself. I'm just trying to raise a smile. Clothes aren't meant to be
            worshipped at a church altar. I have a different approach to most
            designers." —<strong>Jeremy Scott</strong>
          </span>
        </Quote>
        <LazyLoad height={250}>
          <img
            src="https://scontent.fgig4-1.fna.fbcdn.net/v/t31.0-8/p960x960/15896155_1360381797337150_4913478528895911680_o.jpg?_nc_cat=108&_nc_ohc=LEoahpTbSX8AX93hOwk&_nc_ht=scontent.fgig4-1.fna&_nc_tp=6&oh=94c2ac325ce51047e13c7b634735c701&oe=5ECC0813"
            alt="author"
          />
        </LazyLoad>
      </Description>
    </Container>
  );
}
