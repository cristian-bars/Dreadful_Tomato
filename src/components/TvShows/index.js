/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';

function TvShows() {
  const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      fetch('https://gitlab.com/-/snippets/2041384/raw/master/data.json')
        .then(async (response) => {
          if (response.ok) setTodos(await response.json());
        });
    }, []);

    return todos.entries;
  };

  const result = useTodos();

  return (
    <div>
      <ul className="elementsList">
        {result.length ? (
          result.map((serie) => (
            serie.programType === 'series' && (
              <li className="elementDetail">
                <img src={serie.images['Poster Art'].url} alt={serie.title} />
              </li>
            )
          ))
        ) : ('Loading')}
        {}
      </ul>
    </div>
  );
}

export default TvShows;
