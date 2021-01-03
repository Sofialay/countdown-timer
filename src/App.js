import React, {Fragment, useEffect, useState} from 'react'
import './App.scss';
import CardContainer from './components/CardContainer/CardContainer';
import mountain from '././images/pattern-hills.svg';

function App() {
  const [username, setUsername] = useState("")

  const setUser = () => {
    const user = prompt("Ingrese su nombre aquí");
    console.log(user)
    return setUsername(user);
  }

  useEffect(() => {
    setUser()
  }, [])

  return (
    <React.Fragment>
      <section className="contdown-page">
        <h3 className="title">Cumpleañito de {username}</h3> 
        <CardContainer/>
        <img className="mountain-bg" src={mountain} alt="mountain illustration"/>
      </section>
    </React.Fragment>
  );
}

export default App;
