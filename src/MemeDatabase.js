import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MemeData() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://api.memegen.link/templates/');
        const ids = data.map((item) => {
          return item.id;
        });

        setPost(ids);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData().catch((err) => console.log(err));
  }, []);
  return post.map((id) => <option key={id}>{id}</option>);
}
