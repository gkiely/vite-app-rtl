import logo from 'img/logo.svg';
import * as styles from './Header.css';
import Button from 'elements/Button/Button';
import type { Component, Element } from 'utils/routing';
import { renderTags, Tags } from 'utils';
import { useSend } from 'routes';

type Props = Component & {
  props: {
    title: string;
    body: Tags;
    buttons: Element<{ text: string }>[];
    links: Element<{ to: string; text: string }>[];
  };
};

const Header = ({ props: { body, title, buttons, links } }: Props) => {
  const send = useSend();
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>{title}</p>
      {buttons.map((button, i) => (
        <p key={i}>
          <Button
            onClick={() => {
              console.log(button.action);
              if (button.action) {
                send(button.action);
              }
            }}
          >
            {button.props?.text}
          </Button>
        </p>
      ))}
      <p>{renderTags(body)}</p>
      <p>
        {links.map((link, i) => (
          <>
            <a
              className={styles.link}
              key={i}
              href={link.props.to}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.props?.text}
            </a>
            {i < links.length - 1 ? ' | ' : ''}
          </>
        ))}
      </p>
    </header>
  );
};

export default Header;
