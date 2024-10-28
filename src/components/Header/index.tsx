import { useNavigate } from "react-router-dom";
import headerList from "./constants";

const Header = () => {
  const navigate = useNavigate();

  const path = window.location.pathname;

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <header className="top-0 flex flex-row justify-between w-full bg-slate-600">
      <h1 className="flex-nowrap">MDW - APP</h1>
      <nav className="flex justify-end w-auto items-center">
        <ul className="flex flex-row gap-3">
          {headerList.map((item) => (
            <li
              key={item.title}
              onClick={() => handleClick(item.link)}
              className={path === item.link ? "underline" : ""}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
