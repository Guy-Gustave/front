import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <div className="App">
        <BrowserRouter>
        <Link to="/" role="button">Home</Link>
        </BrowserRouter>
      </div>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
