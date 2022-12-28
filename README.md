# Project Details

## Project Name

Movie Trailer App

## Prerequisites

- Node.js (v18.0.0 or above)

## File Structure
```
      root 
       |
       +--- README.md --- (This File)
       |
       +--- .gitignore --- (Git Ignore File)
       |    
       +--- package.json --- (NPM Package File)
       |    
       +--- jest.config.js --- (Jest Config File)
       |    
       +--- babel.config.js --- (Babel Config File)
       |    
       +--- src --- (Source Code)
       |    |
       |    +--- components --- (React Components)
       |    |   
       |    +--- assets --- (Images and CSS)
       |    |    
       |    +--- constants --- (Constants)
       |    |    
       |    +--- data --- (Dummy Data for Testing)
       |    |   
       |    +--- utils --- (Utility Functions)
       |    |
       |    +--- App.js --- (Main App Component)
       |    |
       |    +--- index.js --- (Entry Point)
       |    |
       |    +--- __tests__ --- (Test Cases)
```

## Packages Used

### React
- react
- react-dom
- react-scripts
- web-vitals

### Testing
- jest
- babel-jest
- jest-environment-jsdom
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/user-event

### Babel
- @babel/preset-env
- @babel/preset-react

### Other
- lodash
- axios
- moment

## Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

##

## Files Details

### Components

#### App.js

This is the main component of the application. It contains the following components:

- Navbar - The Navbar component contains the logo and the search bar.

- AppDropdown - The Dropdown component contains the dropdown menu for language filter.

- AppCard - The Card component contains the movie details.

- VideoPlayer - The VideoPlayer component contains the video player for the selected movie.

- AppTag - The Tag component use to display the languages selected from The Dropdown.

- AppLoader - The Loader component use to display the loader.

#### Other Components

- AppButton - The Button component use to display the buttons.

- AppCheckbox - The Checkbox component use to display the checkboxes.

- AppMenu - The Menu component use to display the menu list.


### Constants

#### index.js

This file contains the constants used in the application.

### Data

#### languages.js

This file contains the dummy data for languages used in the application for testing.

#### movies.js

This file contains the dummy data for movies used in the application for testing.

### Utils

#### hooks.js

This file contains the utility functions used in the application.

### Assets

#### images/

This folder contains the images used in the application.

#### css/App.css

This folder contains the CSS files used in the application.

### Tests

#### app-button.test.js

This file contains the test cases for AppButton component.

#### app-card.test.js

This file contains the test cases for AppCard component.

#### app-dropdown.test.js

This file contains the test cases for AppDropdown component.

#### app-menu.test.js

This file contains the test cases for AppMenu component.

#### app-tag.test.js

This file contains the test cases for AppTag component.

#### navbar.test.js

This file contains the test cases for Navbar component.

## Test Cases

### AppButton

- Testing if the button is clicked.
- Testing if the button has currect label.
- Testing if the button has the correct console.

### AppCard

- Testing if the button is clicked.

### AppDropdown

- Testing if on mouse enter event menu list opens.

### AppMenu

- Testing if menu has given options render.

### AppTag

- Testing if the tag is clicked.
- Testing ifif tag console log label on click.

### Navbar

- Testing if the given value is searched.

