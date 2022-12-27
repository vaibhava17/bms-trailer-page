import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AppCard from '../components/AppCard/AppCard';
import movies from '../data/movies.data';

let data = movies[0];

test("testing if the card is clicked", () => {
  const cardClickTester = jest.fn();
  const { getByTestId } = render(
    <AppCard
      onClick={cardClickTester}
      data-testid="card"
      data={data}
    />
  );

  fireEvent.click(getByTestId('card'));

  expect(cardClickTester).toHaveBeenCalled();
});

// test("test if card renders given data", ()=>{
//   const { getByTestId } = render(
//     <AppCard
//       data-testid="card"
//       data={data}
//     />
//   );

//   expect(getByTestId('card')).toHaveTextContent(data.EventName);
//   expect(getByTestId('card')).toHaveTextContent(data.EventLanguage);
//   expect(getByTestId('card')).toHaveTextContent(data.DispReleaseDate);
// })