import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODkxNGNlMTVjYWIwYjRmOGQ0N2Q0YmNmNDY0NjJlOSIsIm5iZiI6MTcyMDM4MTQxMC40NDg2NjYsInN1YiI6IjY2ODVhMjBhNjNkMGI1ZDdmYTFhNDc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-YsUKAu6QiDbPhL3oO7jHiUEfvcSvOYXHUKMKItOuA')
      .then((response) => {
        setData(response.data);
        setLoading(false);  
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
