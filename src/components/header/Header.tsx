import { Switch } from "antd";
import "./header.css";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import SearchBar from "./components/SearchBar";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function Header() {
  const nav = useNavigate();
  const { theme, setTheme } = useContext(GlobalContext);

  const linkStyles = {
    color: theme === "light" ? "black" : "white",
  };

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "All Movies",
      path: "/all-movies",
    },
    {
      label: "WishList",
      path: "/wishlist",
    },
  ];

  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <img onClick={() => nav("/")} src={theme === "light" ? "/anime-logo.png" : "/logo-dark.jpg"} alt="anime logo" />
      <nav>
        <ul>
          {navItems.map((item) => {
            return (
              <li>
                <Link style={linkStyles} to={item.path}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <SearchBar />
      <div>
        <Switch
          onChange={(checked) => {
            if (checked) {
              return setTheme("light");
            }
            setTheme("dark");
          }}
          checkedChildren={<SunOutlined />}
          unCheckedChildren={<MoonOutlined />}
          defaultChecked={theme === "light"}
        />
      </div>
    </header>
  );
}

export default Header;
