import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GlobalContext } from './context/GlobalContext';
import { useState } from 'react';
import { LocalesType, ThemeType } from './types';
import HomePage from './pages/HomePage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "about",
      element: <div>About</div>,
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
