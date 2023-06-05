import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import { getIngredients } from '../../utils/burger-api';



export default function App() {
  // const [state, setState] = React.useState({
  //   data: null,
  //   isLoading: false,
  //   hasError: false
  // });

  

  // React.useEffect(() => {
  //   const getData = () => {
  //     setState({...state, isLoading: true});
  //     getIngredients()
  //       .then((res) => {
  //         setState((prevState) => ({ ...prevState, data: res.data }));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setState((prevState) => ({ ...prevState, hasError: true }));
  //       })
  //       .finally(() => {
  //         setState((prevState) => ({ ...prevState, isLoading: false }));
  //       })
  //   }

  //   getData();    
  // }, []);
  
  // const data = state.data;
  return (
    <div className={styles.app}>
      <AppHeader />
      <Main />
    </div>
  );
}

