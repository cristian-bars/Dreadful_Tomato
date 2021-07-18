/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import {
  Dropdown,
  ListItem,
  Loading,
  Search,
  UnorderedList
} from 'carbon-components-react';

function MovieShows(style) {
  const [currentItem, setCurrentItem] = useState();
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

  const items = [
    {
      id: 'year-0',
      label: 'All',
      value: undefined
    },
    {
      id: 'year-1',
      label: '2011',
      value: 2011
    },
    {
      id: 'year-2',
      label: '2012',
      value: 2012
    },
    {
      id: 'year-1',
      label: '2013',
      value: 2013
    },
    {
      id: 'year-2',
      label: '2014',
      value: 2014
    },
    {
      id: 'year-1',
      label: '2015',
      value: 2015
    },
    {
      id: 'year-2',
      label: '2016',
      value: 2016
    }
  ];

  return (
    <>
      <div className="searchSpace">
        <Search
          id="search-1"
          placeHolderText="Search"
        />
        <Dropdown
          ariaLabel="Dropdown"
          id="carbon-dropdown-example"
          items={items}
          label="Select year"
          field="small"
          onChange={({ selectedItem }) => setCurrentItem(selectedItem.value)}
          selectedItem={currentItem}
          initialSelectedItem={items[0]}
        />
      </div>
      <div className="contentList">
        <div className="listTitle">
          Popular
          {' '}
          {style.title}
        </div>
        <UnorderedList className="elementsList">
          {result.length ? (
            result.map((movie) => (
              movie.programType === style.component && (
                currentItem !== undefined ? (
                  movie.releaseYear === currentItem && (
                    <ListItem id={movie.title} className="elementDetail" key={movie.title}>
                      <img src={movie.images['Poster Art'].url} alt={movie.title} />
                      <div className="backDescription" />
                      <div className="description">
                        <div className="title">
                          {movie.title}
                        </div>
                        <div className="year">
                          {movie.releaseYear}
                        </div>
                        <div className="descriptions">
                          {movie.description}
                        </div>

                      </div>
                    </ListItem>
                  )
                ) : (
                  <ListItem id={movie.title} className="elementDetail" key={movie.title}>
                    <img src={movie.images['Poster Art'].url} alt={movie.title} />
                    <div className="backDescription" />
                    <div className="description">
                      <div className="title">
                        {movie.title}
                      </div>
                      <div className="year">
                        {movie.releaseYear}
                      </div>
                      <div className="descriptions">
                        {movie.description}
                      </div>

                    </div>
                  </ListItem>
                )

              )
            ))
          ) : (
            <Loading
              description="Active loading indicator"
              withOverlay={false}
            />
          )}
        </UnorderedList>
      </div>
    </>
  );
}

export default MovieShows;
