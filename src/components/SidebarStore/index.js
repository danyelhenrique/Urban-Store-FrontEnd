import React from 'react';

import { Aside } from './styles';

export default function SidebarStore() {
    return (

        <Aside>
            <nav>
                <li>
                    <h3>New Arrivals</h3>
                    <a href="">Clothes</a>
                    <a href="">Shoes & Accessories</a>
                </li>
                <li>
                    <h3>Offers</h3>
                    <a href="">Beauty: Buy 2, Get 1 Free</a>
                    <a href="">Tights: B2G1</a>
                    <a href="">Join Loyalty Get 10% off</a>
                </li>
                <li>
                    <h3>Shop by Concept</h3>
                    <a href="">Trend</a>
                    <a href="">Shoes</a>
                    <a href="">Blazers</a>
                    <a href="">Trousers</a>
                    <a href="">Skirts</a>
                    <a href="">Dresses</a>
                    <a href="">Shirts & Blouses</a>
                    <a href="">Top</a>
                    <a href="">Modern Classic</a>
                </li>
            </nav>
        </Aside>

    );
}
