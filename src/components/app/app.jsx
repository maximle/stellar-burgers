import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import { dataUrl } from '../../utils/constants';

export default function App() {
  const [state, setState] = React.useState({
    data: null,
    isLoading: false,
    hasError: false
  });

  const getData = async () => {
    setState({...state, isLoading: true});
    try {
      const res = await fetch(dataUrl);
      const data = await res.json();
      console.log(data);
      setState({...state, data: data.data, isLoading: false});
      
    } catch(err) {
      console.log(err);
      setState({...state, hasError: true});
    }
  }

  React.useEffect(() => {
    getData();
  }, []);
  
  
  return (
    <div className={styles.app}>
      <AppHeader />
      <p>{state.data[0].name}</p>
    </div>
  );
}


