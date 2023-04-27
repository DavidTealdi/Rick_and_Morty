import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';


const URL = 'http://localhost:3001/rickandmorty/login';


// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = 'f1f9dcf5ae3d.3333700bff60b938aec9';

// const email = 'tealdidavid12@gmail.com'
// const password = '1234'

function App() {

   const [access, setAccess] = useState(false)
   const [characters, setCharacters] = useState([]); // Estado
   const location = useLocation()
   const navigate = useNavigate()



   const login = async (userData) => {

      try {
         
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access }  = data;

         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message)
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])

   const onSearch = async (id) => {

      try {

         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)

      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' ? <Nav onSearch = {onSearch} setAccess={setAccess}/> : null
         }

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>

            <Route path='/home' element={<Cards characters = {characters} onClose={onClose}/>}/>

            <Route path='/about' element={<About/>}/>

            <Route path='/detail/:id' element={<Detail/>}/>

            <Route path='/favorites' element={<Favorites/>}/>

         </Routes>

      </div>
   );
}

export default App;