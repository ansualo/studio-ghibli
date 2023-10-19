import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './common/Header/Header';
import { Films } from './pages/Films/Films';
import { createContext, useState } from 'react';

export const SearchContext = createContext()

function App() {

  const [searchedString, setSearchedString] = useState("")

  return (
    <>
      <SearchContext.Provider value={{searchedString, setSearchedString}}>
        <Header />
        <Films />
      </SearchContext.Provider>

    </>
  )
}

export default App
