import React, { useEffect, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import './assets/css/App.css';
import Navbar from './components/Navbar/Navbar';
import AppCard from './components/AppCard/AppCard';
import AppDropdown from './components/AppDropdown/AppDropdown';
import AppLoader from './components/AppLoader/AppLoader';
import AppTag from './components/AppTag/AppTag';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { get } from './utils/api';
import { API_URL, DEBOUNCE_TIME } from './constants';

// TODO: card on click should open video player

function App() {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [LanguageList, setLanguageList] = useState([]);

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

  return (
    <div className="App">
      <Navbar
        onSearch={(value) => debounceSearch(value)}
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
              if (selectedLanguage.includes(options.value)) {
                setSelectedLanguage(selectedLanguage.filter((language) => language !== options.value));
              } else {
                setSelectedLanguage([...selectedLanguage, options.value]);
              }
            }}
            checkbox
          />
        </div>
        <VideoPlayer />
        <div className="flex-grid">
          {loading ? <AppLoader /> : (displayMovies.length > 0 ? displayMovies.map((movie, index) => {
            return (
              <div className="col" key={index}>
                <AppCard
                  data={movie}
                  onClick={() => console.log('clicked', movie)}
                />
              </div>
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
