import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import AppDropdown from '../components/AppDropdown/AppDropdown';
import { languages } from '../data/languages.data';

test("testing if on mouse enter menu list opens", () => {
  render(<AppDropdown options={languages} data-testid="dropdown" />);
  const dropdown = screen.getByTestId('dropdown');
  fireEvent.mouseEnter(dropdown);
  expect(dropdown.getAttribute('class')).toMatch(/active/gi);
});
