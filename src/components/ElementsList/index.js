/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import {
  UnorderedList,
  ListItem
} from 'carbon-components-react';

function MovieShows(style) {
  console.log(style);
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
      <UnorderedList className="elementsList">
        {/* <ul className="elementsList"> */}
        {result.length ? (
          result.map((movie) => (
            movie.programType === style.component && (
              <ListItem id={movie.title} className="elementDetail" key={movie.title}>
                <img src={movie.images['Poster Art'].url} alt={movie.title} />
              </ListItem>
            )
          ))
        ) : ('Loading')}
        {}
      </UnorderedList>
      {/* </ul> */}
    </div>
  );
}

export default MovieShows;
