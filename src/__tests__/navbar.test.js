import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';

test("testing if value is searched", () => {
  console.log = jest.fn();

  function testSearch(value) {
    console.log(value);
  }

  const { getByTestId } = render(<Navbar data-testid="search" onSearch={testSearch} />);

  fireEvent.change(getByTestId("search"), { target: { value: "hello" } });

  expect(console.log).toHaveBeenCalledWith("hello");
});
