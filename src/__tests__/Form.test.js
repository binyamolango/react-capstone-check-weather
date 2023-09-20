import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "../components/Form/Form";
import mockStore from '../__mocks__/reduxMock';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const initialState = {
  location: [],
};

const store = mockStore(initialState);

describe('Form', () => {
  it('renders the search form with an input field', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );

    const inputField = screen.getByPlaceholderText('london,GB');
    expect(inputField).toBeInTheDocument();
  });

  it('updates the input value when the user types', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );

    const inputField = screen.getByPlaceholderText('london,GB');
    const testValue = 'New York,US';

    expect(inputField.value).toBe('');

    userEvent.type(inputField, testValue);

    expect(inputField.value).toBe(testValue);
  });

  it('dispatches the setLocation action on form submission', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );

    const inputField = screen.getByPlaceholderText('london,GB');
    const submitButton = screen.getByRole('button', { name: 'Search' });

    const testValue = 'Paris,FR';

    userEvent.type(inputField, testValue);
    userEvent.click(submitButton);

    expect(store.getActions()).toEqual([
      { type: 'form/setLocation', payload: testValue },
    ]);
  });
});
