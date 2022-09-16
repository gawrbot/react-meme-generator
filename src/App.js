import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import MemeData from './MemeDatabase';

export default function App() {
  const [topText, setTopText] = useState('Welcome');
  const [bottomText, setBottomText] = useState('To The Internet');
  const [memeImage, setMemeImage] = useState('doge');
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>MEME GENERATOR</h1>
      <br />
      {/* Hot pink Background */}
      <div
        style={{
          borderRadius: '5px',
          padding: '20px 10px 20px',
          backgroundColor: 'hotpink',
        }}
      >
        {/* Input Fields */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* Top Text Input */}
          <label style={{ display: 'grid' }}>
            Top Text
            <input
              style={{
                borderRadius: '3px',
                margin: '5px',
              }}
              value={topText}
              onChange={(event) => {
                setTopText(event.currentTarget.value);
              }}
            />
          </label>
          <br />
          {/* Bottom Text Input */}
          <label style={{ display: 'grid' }}>
            Bottom Text
            <input
              style={{ borderRadius: '3px', margin: '5px' }}
              value={bottomText}
              onChange={(event) => {
                setBottomText(event.currentTarget.value);
              }}
            />
          </label>
          <br />
          {/* Meme Template Input */}
          <label style={{ display: 'grid' }}>
            Meme Template
            <input
              style={{ borderRadius: '3px', margin: '5px' }}
              list="memes"
              value={memeImage}
              onChange={(event) => {
                setMemeImage(event.currentTarget.value.toLowerCase());
              }}
            />
            <datalist id="memes">
              <MemeData />
            </datalist>
          </label>
        </div>
        <br />
        {/* Generate Button */}
        <button
          style={{
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 15,
            margin: '0 auto',
            backgroundColor: 'purple',
            color: 'white',
            borderColor: 'white',
            borderRadius: 50,
          }}
          onClick={() => {
            <img
              data-test-id="meme-image"
              alt="Meme"
              src={`https://api.memegen.link/images/${memeImage}/${topText}/${bottomText}.jpg`}
            />;
          }}
        >
          Generate
        </button>
      </div>
      <br />
      {/* Image and Download Button */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 20,
          padding: 20,
          alignItems: 'center',
        }}
      >
        <img
          data-test-id="meme-image"
          alt="Meme"
          src={`https://api.memegen.link/images/${memeImage}/${topText}/${bottomText}.jpg`}
        />
        <br />
        {/* Download Button */}
        <button
          style={{
            display: 'block',
            justifyContent: 'center',
            fontSize: 30,
            margin: '0 auto',
            backgroundColor: 'tomato',
            color: 'white',
            borderColor: 'white',
          }}
          onClick={() => {
            saveAs(
              `https://api.memegen.link/images/${memeImage}/${topText}/${bottomText}.jpg`,
              `${memeImage}/${topText}/${bottomText}.jpg`,
            );
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}
