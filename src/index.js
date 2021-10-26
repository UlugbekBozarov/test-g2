import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import ProductReducer from './redux/Reducers/ProductReducer';
import CardReducer from './redux/Reducers/CardReducers';

const rootReducer = combineReducers({
  products: ProductReducer,
  cards: CardReducer
})

const store = createStore(
  rootReducer,
  {
    products: [
      {
        id: 1,
        name: "Hot Dishes",
        products: [
          {
          id: 1,
          img: '/images/spicy_seasoned.jpg',
          name: 'Spicy seaSoned seafood noodles',
          price: 2.29,
          available: 20
        },
        {
          id: 2,
          img: '/images/salted _pasta.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 3,
          img: '/images/beef_dumpling.jpg',
          name: 'Beef dumpling in hot and sour soup',
          price: 2.99,
          available: 20
        },
        {
          id: 4,
          img: '/images/healthy_noodle.jpg',
          name: 'Healthy noodle with spinach leaf',
          price: 3.29,
          available: 20
        },
        {
          id: 5,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 6,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 7,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 8,
          img: '/images/healthy_noodle.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 9,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        }]
      },
      {
        id: 2,
        name: "Cold Dishes",
        products: [{
          id: 1,
          img: '/images/beef_dumpling.jpg',
          name: 'Spicy seaSoned seafood noodles',
          price: 2.29,
          available: 20
        },
        {
          id: 2,
          img: '/images/salted _pasta.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 3,
          img: '/images/beef_dumpling.jpg',
          name: 'Beef dumpling in hot and sour soup',
          price: 2.99,
          available: 20
        },
        {
          id: 4,
          img: '/images/healthy_noodle.jpg',
          name: 'Healthy noodle with spinach leaf',
          price: 3.29,
          available: 20
        },
        {
          id: 5,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 6,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 7,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 8,
          img: '/images/healthy_noodle.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 9,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        }]
      },
      {
        id: 3,
        name: "Soup",
        products: [{
          id: 1,
          img: '/images/spicy_seasoned.jpg',
          name: 'Spicy seaSoned seafood noodles',
          price: 2.29,
          available: 20
        },
        {
          id: 2,
          img: '/images/salted _pasta.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 3,
          img: '/images/beef_dumpling.jpg',
          name: 'Beef dumpling in hot and sour soup',
          price: 2.99,
          available: 20
        },
        {
          id: 4,
          img: '/images/healthy_noodle.jpg',
          name: 'Healthy noodle with spinach leaf',
          price: 3.29,
          available: 20
        },
        {
          id: 5,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 6,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 7,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 8,
          img: '/images/healthy_noodle.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 9,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        }]
      },
      {
        id: 4,
        name: "Gril",
        products: [{
          id: 1,
          img: '/images/spicy_seasoned.jpg',
          name: 'Spicy seaSoned seafood noodles',
          price: 2.29,
          available: 20
        },
        {
          id: 2,
          img: '/images/salted _pasta.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 3,
          img: '/images/beef_dumpling.jpg',
          name: 'Beef dumpling in hot and sour soup',
          price: 2.99,
          available: 20
        },
        {
          id: 4,
          img: '/images/healthy_noodle.jpg',
          name: 'Healthy noodle with spinach leaf',
          price: 3.29,
          available: 20
        },
        {
          id: 5,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 6,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 7,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 8,
          img: '/images/healthy_noodle.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 9,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        }]
      },
      {
        id: 5,
        name: "Appetizer",
        products: [{
          id: 1,
          img: '/images/spicy_seasoned.jpg',
          name: 'Spicy seaSoned seafood noodles',
          price: 2.29,
          available: 20
        },
        {
          id: 2,
          img: '/images/salted _pasta.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 3,
          img: '/images/beef_dumpling.jpg',
          name: 'Beef dumpling in hot and sour soup',
          price: 2.99,
          available: 20
        },
        {
          id: 4,
          img: '/images/healthy_noodle.jpg',
          name: 'Healthy noodle with spinach leaf',
          price: 3.29,
          available: 20
        },
        {
          id: 5,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 6,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 7,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 8,
          img: '/images/healthy_noodle.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 9,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        }]
      },
      {
        id: 6,
        name: "Dessert",
        products: [{
          id: 1,
          img: '/images/spicy_seasoned.jpg',
          name: 'Spicy seaSoned seafood noodles',
          price: 2.29,
          available: 20
        },
        {
          id: 2,
          img: '/images/salted _pasta.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 3,
          img: '/images/beef_dumpling.jpg',
          name: 'Beef dumpling in hot and sour soup',
          price: 2.99,
          available: 20
        },
        {
          id: 4,
          img: '/images/healthy_noodle.jpg',
          name: 'Healthy noodle with spinach leaf',
          price: 3.29,
          available: 20
        },
        {
          id: 5,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 6,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 7,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 8,
          img: '/images/healthy_noodle.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        },
        {
          id: 9,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20
        }]
      }
    ],
    cards: {
      orders: [
        {
          id: 1,
          img: '/images/spicy_seasoned.jpg',
          name: 'Salted Pasta with mushroom sauce wemf kwjenfjkw ',
          price: 2.69,
          available: 20,
          quantity: 2,
          order_note: "Hello",
          total: 2.69
        },
        {
          id: 2,
          img: '/images/salted _pasta.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20,
          quantity: 1,
          order_note: "Hello",
          total: 2.69
        },
        {
          id: 3,
          img: '/images/beef_dumpling.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20,
          quantity: 3,
          order_note: "Hello",
          total: 2.69
        },
        {
          id: 4,
          img: '/images/healthy_noodle.jpg',
          name: 'Salted Pasta with mushroom sauce',
          price: 2.69,
          available: 20,
          quantity: 1,
          order_note: "Hello",
          total: 2.69
        }
      ],
      total_price: 39.5
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
