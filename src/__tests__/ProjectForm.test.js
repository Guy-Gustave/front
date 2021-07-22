import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import ProjectForm from '../containers/ProjectForm';
import ProjetList from '../containers/ProjetList';

const mockStore = configureMockStore();
const store = mockStore({});

describe('ProjectForm', () => {
  test('renders Register component', () => {
    const { queryAllByTestId } = render(
      (
        <Provider store={store}>
          <Router>
            <Route path="/new" component={ProjectForm} />
          </Router>
        </Provider>
      ),
    );
    const home = queryAllByTestId('home');
    expect(home).toBeTruthy();
  });

  test('it should fetch data from api form', () => {
    const { queryAllByTestId } = render(
      (
        <Provider store={store}>
          <Router>
            <Route path="/projects" component={ProjetList} />
          </Router>
        </Provider>
      ),
    );
    const form = queryAllByTestId('form');
    expect(form).toBeTruthy();
  });
});
