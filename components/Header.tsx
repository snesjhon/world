import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiExternalLink, FiInstagram, FiSun, FiTwitter } from "react-icons/fi";

interface Props {
  theme: "light" | "dark";
}

export function Header({ theme }: Props) {
  const [toggleLight, setToggleLight] = useState(theme === "light");
  const toggleTheme = (theme: "light" | "dark") => {
    const htmlTag = document.getElementsByTagName("html")[0];
    if (theme === "light") {
      htmlTag.setAttribute("data-theme", "light");
      setToggleLight(true);
    } else {
      htmlTag.setAttribute("data-theme", "dark");
      setToggleLight(false);
    }
  };

  useEffect(() => {
    setToggleLight(theme === "light");
  }, [theme]);

  return (
    <header className="container">
      <hgroup className="header">
        <img src={"avatar.jpg"} className="avatar" />
        <h1>Jhonatan Salazar</h1>
        <h2>
          Hi! 👋🏽 My full name is <em>Jhonatan Jesus Salazar Rodriguez</em>, but
          my friends call me <strong>Jhon</strong>
        </h2>
      </hgroup>
      <nav className="nav-header">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/recommendations">Recs</Link>
          </li>
          <li>
            <a href="http://snesjhon.dev" target="_blank" rel="noreferrer">
              Portfolio
              <FiExternalLink
                size="0.9rem"
                style={{ marginLeft: "5px", marginBottom: "5px" }}
              />
            </a>
          </li>
          <li>
            <a href="./resume.pdf">
              Resume
              <FiExternalLink
                size="0.9rem"
                style={{ marginLeft: "5px", marginBottom: "5px" }}
              />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              className="secondary nav-link"
              onClick={() => toggleTheme(toggleLight ? "dark" : "light")}
            >
              <FiSun />
            </a>
          </li>
          <li>
            <a
              className="secondary"
              href="https://www.twitter.com/snesjhon"
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter />
            </a>
          </li>
          <li>
            <a
              className="secondary"
              href="https://www.instagram.com/snesjhon/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
