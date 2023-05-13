import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import { dataUrl } from '../../utils/constants';
import Main from '../main/main';



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
        // setState((prevState) => ({ ...prevState, data: data.data, isLoading: false }));
        setState({...state, data: data.data, isLoading: false});
      } catch(err) {
        console.log(err);
        setState({...state, hasError: true});
      }
    }

    getData();

    
  }, []);
  
  const data = state.data;
  return (
    <div className={styles.app}>
      <AppHeader />

      {data && <Main data={data} />}
    </div>
  );
}

