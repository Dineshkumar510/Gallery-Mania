/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Heading} from './Components/Heading';
import {Loader} from './Components/Loader';
import {UnsplashImage} from './Components/UnsplashImage';
import axios from 'axios';
import Styled, { createGlobalStyle } from 'styled-components';
import InfinityScroll from 'react-infinite-scroll-component';


//style
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family:'Oswald', sans-serif;
  }
`;

const WrapperImage = Styled.section`
max-width: 70rem;
margin: 4rem auto;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-auto-rows: 300px;
`;

function App() {
  const [images, setImages] = useState([]);

  useEffect(()=> {
    fetchImages(); 
  }, [])

  const fetchImages = () => {
    const APIRoot = "https://api.unsplash.com";
    const ClientId = process.env.REACT_APP_CLIENT_ID;

    axios.get(`${APIRoot}/photos/random?client_id=${ClientId}&count=12`)
    .then(res => setImages([...images, ...res.data]));
  }

  return (
    <div className="App">
    <createGlobalStyle/>
     <Heading/>
        <InfinityScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={true}
            loader={ <Loader/>}
        >
         <WrapperImage>
              {images.map(image => (
               <UnsplashImage url={image.urls.small} key={image.id}/>
             ))}
         </WrapperImage>
        </InfinityScroll>
    </div>
  );
}

export default App;
