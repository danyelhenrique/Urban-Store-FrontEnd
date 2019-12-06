import React from 'react';

import { NavContainer, FirstRow, UserArea, SecondRow, SecondRowNav } from './styles';

const Onscroll = true

export default function Nav() {
    return (
        <NavContainer scroll={Onscroll}>
            <FirstRow>
                <div>
                    <div>
                        <img src="/logo.png" alt="logo" />
                    </div>
                    <UserArea>
                        <a href="/#">
                            <img src="/nav/profile.png" alt="" />
                            <span>Signin</span>
                        </a>
                        <a href="/#">
                            <img src="/nav/favorites.png" alt="" />
                            <span>Favorites</span>
                        </a>
                        <a href="/#">
                            <img src="/nav/bag.png" alt="" />
                            <span>Shopping Bag</span>
                        </a>
                    </UserArea>
                </div>
            </FirstRow>

            <SecondRow>
                {!Onscroll && (
                    <span>Clothes  for all types of styles</span>
                )}
                <SecondRowNav>
                    <li>
                        <a href="#">Men's</a>
                        <a href="#">Women's</a>
                        <a href="#">Baby</a>
                        <a href="#">Girls</a>
                        <a href="#">Boys</a>
                        <a href="#">H&M</a>
                        <a href="#">News</a>
                    </li>
                </SecondRowNav>

                {Onscroll && (
                    <>
                        <a href="/#">
                            <img src="/nav/bag-light.png" alt="bag" />
                        </a>
                    </>
                )
                }
            </SecondRow>
        </NavContainer>
    );
}

