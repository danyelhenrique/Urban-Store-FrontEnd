import React from 'react';


import {
    Container,
    Image,
    ItemDetail,
    Header,
    Body,
    Select,
    Button,
    Favorite,
    Details,
    ButtonDetails
} from './styles';

export default function ItemMore() {
    return (
        <Container>
            <Image>
                <img src="/item-detail1.jpg" alt="item" />
                <img src="/item-detail2.jpg" alt="item" />
            </Image>
            <ItemDetail>
                <Header>
                    <div>
                        <span>Fitted Blazzer</span>
                        <span>$ 34.99</span>
                    </div>
                    <Favorite>
                        <img src="/favorite-red.png" alt="favorite" />
                    </Favorite>
                </Header>
                <Body>
                    <img src="/icons/First.png" alt="item" />
                    <img src="/icons/Second.png" alt="item" />
                    <img src="/icons/Third.png" alt="item" />
                    <img src="/icons/Four.png" alt="item" />
                    <img src="/icons/Five.png" alt="item" />
                    <img src="/icons/Six.png" alt="item" />
                </Body>
                <Select>
                    <select name="select">
                        <option value="valor1">Select Size</option>
                        <option value="valor2" selected>Select Size </option>
                        <option value="valor3">Select Size </option>
                    </select>
                    <img src="/icons/select.png" alt="select" />
                </Select>
                <Button>
                    <div>
                        <img src="/icons/bag-btn.png" alt="btnIcon" />
                        <strong>ADD</strong>
                    </div>
                </Button>
            </ItemDetail>
            <Image secondImage>
                <img src="/item-detail3.jpg" alt="item" />
            </Image>
            <Details>
                <ButtonDetails >
                    <span>DETAILS</span>
                </ButtonDetails>

                <ButtonDetails >
                    <span>SIMILAR ITEMS</span>
                </ButtonDetails>

                <ButtonDetails >
                    <span>REVIEWS(324)</span>
                </ButtonDetails>
                <div>
                    <img src="/icons/start-black.png" alt="start" />
                    <img src="/icons/start-black.png" alt="start" />
                    <img src="/icons/start-black.png" alt="start" />
                    <img src="/icons/star-withe-and-black.png" alt="start" />
                </div>
            </Details>
        </Container>
    );
}
