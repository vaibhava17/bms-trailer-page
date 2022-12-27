import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AppTag from '../components/AppTag/AppTag';

test("testing if the tag is clicked", () => {
  const tagClickTester = jest.fn();

  const { getByTestId } = render(
    <AppTag onClick={tagClickTester} data-testid="tag" />
  );

  fireEvent.click(getByTestId('tag'));

  expect(tagClickTester).toHaveBeenCalled();
});

test("testing if tag console log label on click", () => {
  console.log = jest.fn();

  function testClick(label) {
    console.log(label);
  }

  const { getByTestId } = render(
    <AppTag label="hello" data-testid="tag" onClick={testClick} />
  );

  fireEvent.click(getByTestId('tag'));

  expect(console.log).toHaveBeenCalledWith("hello");
});

