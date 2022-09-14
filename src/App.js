import './App.css';
import { useState } from 'react';
import Fetch from './Fetch';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImage, setMemeImage] = useState('');
  return (
    <div>
      <h1 className="headline">MEME GENERATOR</h1>
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
        Meme Background Image
        <input
          type="search"
          value={memeImage}
          onChange={(event) => {
            setMemeImage(event.currentTarget.value);
          }}
        />
      </label>
      {/* <Fetch /> */}
    </div>
  );
}
