import './App.css';
import { useState } from 'react';
import MemeData from './MemeDatabase';

export default function App() {
  const [topText, setTopText] = useState('Welcome');
  const [bottomText, setBottomText] = useState('to meme world');
  const [memeImage, setMemeImage] = useState('spongebob');
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>MEME GENERATOR</h1>
      <br />
      <label>
        Top Text
        <input
          value={topText}
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label>
        Bottom Text
        <input
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label>
        Meme Template
        <input
          list="memes"
          value={memeImage}
          onChange={(event) => {
            setMemeImage(event.currentTarget.value.toLowerCase());
          }}
        />
        <datalist id="memes">
          <option>Keanu</option>
          <option>Spongebob</option>
          <option>Bender</option>
          <option>Fry</option>
          <MemeData />
        </datalist>
      </label>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 20,
          padding: 20,
        }}
      >
        {/* Image Element */}
        {/* <img
          data-test-id="meme-image"
          alt="Meme"
          src={`https://api.memegen.link/images/${memeImage}.jpg`}
        /> */}
        <img
          data-test-id="meme-image"
          alt="Meme"
          src={`https://api.memegen.link/images/${memeImage}/${topText}/${bottomText}.jpg`}
        />
      </div>
    </div>
  );
}

// Bild von hier:
// https://api.memegen.link/images/${memeImage}/${topText}/${bottomText}.jpg
// const downloadAndSaveCustomMeme = async (url, folder, path) => {
// const imgToGet = await fetch('https://api.memegen.link/images/bender/memes/memes_everywhere.jpg');
// const arrayBuffer = await imgToGet.arrayBuffer();
// const buffer = Buffer.from(arrayBuffer);
// console.log(buffer)
