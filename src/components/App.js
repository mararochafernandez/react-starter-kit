import '../styles/App.scss';
//import { useEffect, useState } from 'react';
//import callToApi from '../services/api';
//import localStorage from '../services/localstorage';
//import { v4 as uuid } from 'uuid';
//import { Link, Route, Switch } from 'react-router-dom';

//console.log(uuid());

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  // api

  //const [data, setData] = useState([]);

  /*
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  */

  // local storage

  //const [name, setName] = useState(localStorage.get('name', ''));
  //const [email, setEmail] = useState(localStorage.get('email', ''));

  //useState(localStorage.get('data', {}).name || '');
  //useState(localStorage.get('data', {}).email || '');

  /*
  useEffect(() => {
    localStorage.set('name', name);
    localStorage.set('email', email);
  }, [name, email]);
  */

  /*
  useEffect(() => {
    localStorage.set('data', {
      name: name,
      email: email,
    });
  }, [data]);
  */

  return (
    // HTML ✨

    <div className="app">{getTitle('Happy coding!')}</div>
  );
}

export default App;
