import { createContext } from "react";
import { LocalesType, ThemeType } from "../types";



const defaultValue: {
  theme: ThemeType,
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>,
  locale?: LocalesType,
  setLocale?: React.Dispatch<React.SetStateAction<LocalesType>>
} = {
  theme: "light",
  setTheme: () => { }

}
export const GlobalContext = createContext(defaultValue);
