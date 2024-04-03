import { FiInstagram, FiTwitter, FiMenu, FiExternalLink } from "react-icons/fi";
import type { LinkProp } from "../../Header.astro";
import "./Nav.css";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export function Nav({ links }: { links: LinkProp[] }) {
  const linkList = links.map(({ url, label, external }) => (
    <li key={url + label}>
      <a
        href={url}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {label}
        {external && (
          <span className="icon">
            <FiExternalLink size="0.9rem" />
          </span>
        )}
      </a>
    </li>
  ));
  return (
    <nav>
      <ul className="desktopNav">{linkList}</ul>
      <ul className="mobileNav">
        <li>
          <details role="list">
            <summary aria-haspopup="listbox">
              <FiMenu />
            </summary>
            <ul role="listbox">{linkList}</ul>
          </details>
        </li>
      </ul>
      <ul>
        <li>
          <ThemeSwitcher />
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
  );
}
