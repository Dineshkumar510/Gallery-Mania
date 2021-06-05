import React from 'react';
import Styled from 'styled-components';

const Header = Styled.header`
    max-width: 70rem;
    margin: 2rem auto;
    text-align: center;
`;

const H1 = Styled.h1`
font-family: 'Oswald', sans-serif;
margin-bottom: 1em;
`; 

export const Heading = () => {
    return (
        <Header>
            <H1>Unsplash</H1>
            <p>The internet’s source of freely-usable images.</p>
            <p>Powered by creators everywhere.</p>
        </Header>
    )
}
