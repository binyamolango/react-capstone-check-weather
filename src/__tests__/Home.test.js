import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home/Home";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockStore from "../__mocks__/reduxMock";

const initialState = {
  location: ''
}

const store = mockStore(initialState);

describe('Home', () => {
  it('render the title correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    const title = screen.getByText('Home');
    expect(title).toBeInTheDocument();
  })
})