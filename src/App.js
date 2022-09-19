import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';
import Select from 'react-select';

// import MemeData from './MemeDatabase';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [post, setPost] = useState([]);
  const [memeImage, setMemeImage] = useState('');
  function MemeData() {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            'https://api.memegen.link/templates/',
          );

          const memes = data.map((item) => {
            return { value: item.id, label: item.name };
          });
          setPost(memes);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData().catch((err) => console.log(err));
    }, []);

    return post;
  }
  MemeData();
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
            Top text
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
            Bottom text
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
        </div>
        <br />
        <label htmlFor="memeOptions">Meme template</label>
        <Select
          id="memeOptions"
          options={post}
          value={memeImage}
          onChange={(option) => setMemeImage(option.value)}
        />
        <br />
        {/* Generate Button --> not working*/}
        {/* <button
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
          >
          Generate
        </button> */}
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
        <div>
          {memeImage.length === 0 ||
          bottomText.length === 0 ||
          memeImage.length === 0 ? (
            <img
              data-test-id="meme-image"
              alt="preview"
              src="https://api.memegen.link/images/feelsgood/it's_so_ugly/but_it's_working.jpg"
            />
          ) : (
            <img
              data-test-id="meme-image"
              alt="Meme"
              src={`https://api.memegen.link/images/${memeImage}/${topText}/${bottomText}.jpg`}
            />
          )}
        </div>
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
