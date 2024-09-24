import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Logo, { LogoInterface } from "./components/logo/Logo";

const logoData: LogoInterface[] = [
  {
    href: "https://vitejs.dev",
    src: viteLogo,
    className: "logo",
    alt: "Vite logo",
  },
  {
    href: "https://react.dev",
    src: reactLogo,
    className: "logo react",
    alt: "React logo",
  },
];

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState<number>(0);

  const fetchData = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?count=20"
    );
    const data = await response.json()
    setCharacters(data.results)
  };

  useEffect(() => {
    fetchData()
  }, []);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const discount = () => {
    setCount((count) => count - 1);
  };

  console.log(characters);

  return (
    <>
      {logoData.map(({ href, src, className, alt }, index) => (
        <Logo
          href={href}
          src={src}
          className={className}
          alt={alt}
          key={index}
        />
      ))}
      <h1>MDW App {count}</h1>
      <div className="card">
        <button onClick={increment}>Incrementar</button>
        <button onClick={discount}>Descontar</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
