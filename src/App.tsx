import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import { GlobalContext } from './context/GlobalContext';
import { useState } from 'react';
import { LocalesType, ThemeType } from './types';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  const [theme, setTheme] = useState<ThemeType>("light");
  const [locale, setLocale] = useState<LocalesType>("sq");

  return (

    <GlobalContext.Provider value={{ theme, setTheme, locale, setLocale }}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  )
}

export default App
