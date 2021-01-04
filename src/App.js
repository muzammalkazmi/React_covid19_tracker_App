import React from 'react'

import {Cards,Chart,CountryPicker}from './Components'
import styles from './App.module.css'
import {fetchData}from './Api'
class App extends React.Component{
  state={
    data:{}
  }
  async componentDidMount(){
    const data=await fetchData()
    this.setState={data}
  }


render() {
  return (
    <div className={styles.container}>
      <Cards />
      <Chart/>
      <CountryPicker/>
    
    </div>
  );
}
}
export default App;

