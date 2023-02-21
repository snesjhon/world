import { FiInstagram, FiTwitter, FiMenu, FiExternalLink } from "react-icons/fi";
import { useIsMobile } from "../../../hooks/useIsMobile";
import type { LinkProp } from "../../Header.astro";
import { ThemeSwitcher } from "../ThemeSwitcher";
import "./Nav.css";

export function Nav({ links }: { links: LinkProp[] }) {
  const isMobile = useIsMobile();
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
      <ul>
        {isMobile ? (
          <li>
            <details role="list">
              <summary
                aria-haspopup="listbox"
                role="button"
                className="contrast"
              >
                <FiMenu />
              </summary>
              <ul role="listbox">{linkList}</ul>
            </details>
          </li>
        ) : (
          linkList
        )}
      </ul>
      <ul>
        <li>
          <ThemeSwitcher />
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
