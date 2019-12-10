/* eslint-disable react/jsx-indent */
import React from 'react';

import {
    Container,
    Item,
    Bag,
    Detail,
    Items,
    Remove,
    Form,
    OrderAndTotal,
    BtnCheckout,
} from './styles';

export default function MainCart() {
    return (
        <Container>
            <Items>
                <Item>
                    <img src="/_models/girl11.jpg" alt="model" />
                    <Detail>
                        <span>Coat with Tie Belt</span>
                        <small>$ 69.99</small>
                        <p>Art.no.0755362003</p>
                        <p>Color: Light brown</p>
                        <p>Size: 2</p>
                        <p>Total: $69.99</p>
                        <div>
                            <button>
                                <img src="/favorite-cart.png" alt="favorite" />
                            </button>
                            <select name="quantity">
                                <option value="choice">quantity</option>
                                <option value="one">1</option>
                                <option value="two">4</option>
                                <option value="thrith">3</option>
                            </select>
                        </div>
                    </Detail>
                    <Remove>
                        <button>
                            <img src="/icons/remove.png" alt="remove" />
                        </button>
                    </Remove>
                </Item>

                <Item>
                    <img src="/_models/girl11.jpg" alt="model" />
                    <Detail>
                        <span>Coat with Tie Belt</span>
                        <small>$ 69.99</small>
                        <p>Art.no.0755362003</p>
                        <p>Color: Light brown</p>
                        <p>Size: 2</p>
                        <p>Total: $69.99</p>
                        <div>
                            <button>
                                <img src="/favorite-cart.png" alt="favorite" />
                            </button>
                            <select name="quantity">
                                <option value="choice">quantity</option>
                                <option value="one">1</option>
                                <option value="two">4</option>
                                <option value="thrith">3</option>
                            </select>
                        </div>
                    </Detail>
                    <Remove>
                        <button>
                            <img src="/icons/remove.png" alt="remove" />
                        </button>
                    </Remove>
                </Item>

                <Item>
                    <img src="/_models/girl11.jpg" alt="model" />
                    <Detail>
                        <span>Coat with Tie Belt</span>
                        <small>$ 69.99</small>
                        <p>Art.no.0755362003</p>
                        <p>Color: Light brown</p>
                        <p>Size: 2</p>
                        <p>Total: $69.99</p>
                        <div>
                            <button>
                                <img src="/favorite-cart.png" alt="favorite" />
                            </button>
                            <select name="quantity">
                                <option value="choice">quantity</option>
                                <option value="one">1</option>
                                <option value="two">4</option>
                                <option value="thrith">3</option>
                            </select>
                        </div>
                    </Detail>
                    <Remove>
                        <button>
                            <img src="/icons/remove.png" alt="remove" />
                        </button>
                    </Remove>
                </Item>
            </Items>

            <Bag>
                <h3>SHOPPING BAG TOTAL</h3>
                <Form>
                    <label htmlFor="discont">
                        ADD DISCONT CODE
                        <input type="text" placeholder="Cupom" id="discont" />
                    </label>
                    <button type="button">ADD</button>
                </Form>
                <OrderAndTotal>
                    <div>
                        <span>ORDER VALUE: </span>
                        <span>$149.98</span>
                    </div>
                    <div>
                        <span>Shipping & Handling: </span>
                        <span>FREE</span>
                    </div>
                    <div>
                        <span>TOTAL: </span>
                        <span>$149.98*</span>
                    </div>
                </OrderAndTotal>
                <BtnCheckout>CONTINUE TO CHECKOUT</BtnCheckout>
            </Bag>
        </Container>
    );
}
