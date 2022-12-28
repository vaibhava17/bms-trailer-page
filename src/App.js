import React, { useEffect, useState, useCallback, useRef } from 'react';
import { debounce } from 'lodash';
import './assets/css/App.css';
import Navbar from './components/Navbar/Navbar';
import AppCard from './components/AppCard/AppCard';
import AppDropdown from './components/AppDropdown/AppDropdown';
import AppLoader from './components/AppLoader/AppLoader';
import AppTag from './components/AppTag/AppTag';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { API_URL, DEBOUNCE_TIME } from './constants';
import { indexCount, get } from './utils/hooks';

function App() {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(undefined);
  const [activeIndex, setActiveIndex] = useState(null);
  const [count, setCount] = useState(4);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [LanguageList, setLanguageList] = useState([]);
  const playerRef = useRef(null);

  // Debounce search with 500ms
  const debounceSearch = useCallback(debounce(value => {
    setSearchValue(value);
    setLoading(true);
  }, DEBOUNCE_TIME), []);

  // Fetch data from API
  useEffect(() => {
    setLoading(true);
    get(API_URL).then((data) => {
      setLanguageList(data.languageList);
      setMovies(Object.values(data.moviesData));
      setDisplayMovies(Object.values(data.moviesData));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  // Filter movies based on search value
  useEffect(() => {
    let filteredMovies = movies.filter((movie) => {
      return movie.EventName.toLowerCase().includes(searchValue.toLowerCase());
    });
    setDisplayMovies(filteredMovies);
    setLoading(false);
  }, [searchValue, movies]);

  // Filter movies based on selected language
  useEffect(() => {
    if (selectedLanguage.length > 0) {
      let filteredMovies = movies.filter((movie) => {
        return selectedLanguage.includes(movie.EventLanguage);
      });
      setDisplayMovies(filteredMovies);
    } else {
      setDisplayMovies(movies);
    }
  }, [selectedLanguage, movies]);

  // Map language list to dropdown options
  let languageOptions = LanguageList.map((language) => {
    return { value: language, label: language };
  });

  // Change count on window resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 616) {
        setCount(1);
      } else if (window.innerWidth < 942) {
        setCount(2);
      } else if (window.innerWidth < 1250) {
        setCount(3);
      } else {
        setCount(4);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // get video player scroll in to view
  useEffect(() => {
    if (activeIndex !== null) {
      playerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeIndex]);

  return (
    <div className="App">
      <Navbar
        onSearch={(value) => {
          debounceSearch(value);
          setSelectedMovie(undefined);
        }}
      />
      <div className="container">
        <div className="filter">
          <div className='tags-group'>
            {selectedLanguage.length > 0 && selectedLanguage.map((language, index) => {
              return (
                <AppTag
                  key={index}
                  label={language}
                  onClick={(label) => {
                    setSelectedMovie(undefined);
                    setSelectedLanguage(selectedLanguage.filter((language) => language !== label));
                  }}
                />
              )
            })}
          </div>
          <AppDropdown
            options={languageOptions}
            placeholder="All Language"
            onChange={(e, options) => {
              setSelectedMovie(undefined);
              if (selectedLanguage.includes(options.value)) {
                setSelectedLanguage(selectedLanguage.filter((language) => language !== options.value));
              } else {
                setSelectedLanguage([...selectedLanguage, options.value]);
              }
            }}
            checkbox
          />
        </div>
        <div className="flex-grid">
          {loading ? <AppLoader /> : (displayMovies.length > 0 ? displayMovies.map((movie, index) => {
            return (
              <>
                {selectedMovie && index === (indexCount(activeIndex, count)) && (
                  <VideoPlayer
                    playerRef={playerRef}
                    data={selectedMovie}
                    onClose={() => {
                      setSelectedMovie(undefined);
                      setActiveIndex(null)
                    }}
                  />
                )}
                <div key={index}>
                  <AppCard
                    id={`card-${index}`}
                    data={movie}
                    onClick={() => {
                      setSelectedMovie(movie);
                      setActiveIndex(index)
                    }}
                  />
                </div>
              </>
            );
          }) : (
            <div className="no-data">
              <i className="fas fa-film"></i>
              <span>
                No Data Found
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
