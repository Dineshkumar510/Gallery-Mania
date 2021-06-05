import React from 'react';
import Styled from 'styled-components';

const Img =Styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3%; 
    transition: transform .2s;

    &:hover {
    -ms-transform: scale(1.2); /* IE 9 */
    -webkit-transform: scale(1.2); /* Safari 3-8 */
    transform: scale(1.2); 
    }
`;

export const UnsplashImage = ({url, key}) => {
    return (
        <div>
            <Img className="image" src={url} key={key} alt="image"/>         
        </div>
    )
}
