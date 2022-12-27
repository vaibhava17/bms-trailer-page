import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import AppMenu from '../components/AppMenu/AppMenu';
import { languages } from '../data/languages.data';

test("testing if menu has given options render", () => {
  render(<AppMenu options={languages} data-testid="menu" />);
  const menu = screen.getByTestId('menu');
  expect(menu).toMatchInlineSnapshot(`
  <ul
    class="app-menu app-menu--small "
    data-testid="menu"
  >
    <li
      value="English"
    >
      <span>
        English
      </span>
    </li>
  </ul>
    `);
});