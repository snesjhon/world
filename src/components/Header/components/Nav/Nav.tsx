import { FiInstagram, FiMenu, FiExternalLink } from 'react-icons/fi';
import { ThemeSwitcher } from '../ThemeSwitcher';

export interface LinkProp {
  url: string;
  label: string;
  external?: boolean;
}

export function Nav({ links }: { links: LinkProp[] }) {
  const linkList = links.map(({ url, label, external }) => (
    <li key={url + label}>
      <a
        href={url}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
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
      <ul
        className="desktopNav"
        style={{ flexDirection: 'row', gap: '0.75rem', marginTop: '0.5rem' }}
      >
        <li>
          <ThemeSwitcher />
        </li>
        <li>
          <a
            href="https://www.instagram.com/snesjhon/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram size="1.1rem" />
          </a>
        </li>
      </ul>
      <ul className="mobileNav">
        <li>
          <details role="list">
            <summary aria-haspopup="listbox">
              <FiMenu />
            </summary>
            <ul role="listbox">{linkList}</ul>
          </details>
        </li>
        <ul>
          <li>
            <ThemeSwitcher />
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
      </ul>
    </nav>
  );
}
