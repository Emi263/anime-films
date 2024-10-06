import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GlobalContext } from './context/GlobalContext';
import { useState } from 'react';
import { LocalesType, ThemeType } from './types';
import HomePage from './pages/HomePage';
import SingleMovie from './pages/SingleMovie';
import AllMovies from './pages/AllMovies';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: '/all-movies',
      element: <AllMovies />,
    },
    {
      path: "movie/:id",
      element: <SingleMovie />,
    },
  ]);

  const [theme, setTheme] = useState<ThemeType>("dark");
  const [locale, setLocale] = useState<LocalesType>("sq");

  return (

    <GlobalContext.Provider value={{ theme, setTheme, locale, setLocale }}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  )
}

export default App;
