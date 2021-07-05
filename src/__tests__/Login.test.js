import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Register from '../containers/Register';
import Login from '../containers/Login';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Login', () => {
  
  test('renders Register component', () => {
    const { queryAllByTestId } = render(
      (
        <Provider store={store}>
          <Router>
            <Route path="/register" component={Register} />
          </Router>
        </Provider>
      ),
    );
    const home = queryAllByTestId('home');
    expect(home).toBeTruthy();
  });

  test('it should have a Login form', () => {
    const { queryAllByTestId } = render(
      (
        <Provider store={store}>
          <Router>
            <Route path="/register" component={Register} />
          </Router>
        </Provider>
      ),
    );
    const form = queryAllByTestId('form');
    expect(form).toBeTruthy();
  });
});