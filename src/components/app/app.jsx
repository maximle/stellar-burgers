import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import { dataUrl } from '../../utils/constants';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';

export default function App() {
  const [state, setState] = React.useState({
    data: null,
    isLoading: false,
    hasError: false
  });

  

  React.useEffect(() => {
    const getData = async () => {
      try {
        setState({...state, isLoading: true});
        const res = await fetch(dataUrl);
        const data = await res.json();
        setState((prevState) => ({ ...prevState, data: data.data, isLoading: false }));
      } catch(err) {
        console.log(err);
        setState({...state, hasError: true});
      }
    }
    
    // const getData = () => {
    //   fetch(dataUrl)
    //   .then(res => res.json())
    //   .then((res) => {
    //     setState((prevState) => ({ ...prevState, data: res.data }));
    //   })
    //   .catch(() => {
    //     setState((prevState) => ({ ...prevState, hasError: true }));
    //   })
    //   .finally(() => {
    //     setState((prevState) => ({ ...prevState, isLoading: false }));
    //   });
    // }

    

    getData();

    
  }, []);
  // console.log(state);
  const data = state.data;
  return (
    <div className={styles.app}>
      <AppHeader />
      <p></p>
      {state.data && <BurgerIngridients data={data} />}
    </div>
  );
}


