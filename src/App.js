import React from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';
import { Provider } from 'react-redux';
import store from './redux/store';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <h1>User List</h1>
        <Filter />
        <UserList />
      </div>
    </Provider>
  );
};

export default App;

