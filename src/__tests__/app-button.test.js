import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import AppButton from '../components/AppButton/AppButton';

test("testing if the button is clicked", () => {
  const buttonClickTester = jest.fn();

  const { getByText } = render(
    <AppButton onClick={buttonClickTester} />
  );

  fireEvent.click(getByText('Button'));

  expect(buttonClickTester).toHaveBeenCalled();
});

test("testing if button has currect label", () => {
  const handleClick = jest.fn()

  render(<AppButton onClick={handleClick} label="Click Me" />)

  fireEvent.click(screen.getByText(/click me/i))

  expect(handleClick).toHaveBeenCalledTimes(1)
});

test("testing if button has the correct console log", () => {
  console.log = jest.fn();

  function testingfn() {
    console.log('hello');
  }

  const { getByText } = render(
    <AppButton onClick={testingfn} />
  );

  fireEvent.click(getByText('Button'));

  expect(console.log).toHaveBeenCalledWith("hello");
});

