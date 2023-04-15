import React from "react";

import close from "../close.svg";
import "../App.css";

interface IMenuProps {
  open: boolean;
  onCloseDrawerClick: () => void;
}

export const Menu = (props: IMenuProps) => {
  const { open, onCloseDrawerClick } = props;
  const primaryItemRef = React.useRef<any>();
  
  const [visibilityClassName, setVisibilityClassName] = React.useState("hidden");
  const menuDisplayClassName = open ? "menu-show" : "menu-hide";
  const setFocus = () => {
    if (open && primaryItemRef.current) {
      primaryItemRef.current.focus();
    }
    if (!open) {
      setVisibilityClassName("hidden");
    }
  };

  React.useEffect(() => {
    if (open) {
      setVisibilityClassName("visible");
    }
  }, [open]);

  const primaryLinks = ["Home", "Shop", "About us"];

  const footerLinks = [
    "Contact",
    "Track your order",
    "Return policy",
    "Shipping policy",
  ];

  return (
    <div
      className={`menu-transition ${menuDisplayClassName} ${visibilityClassName}`}
      onTransitionEnd={setFocus}
    >
      <div className="menu-header-container">
        <h3 className="menu-header">Menu</h3>
        <div
          className="menu-icon-container"
          onClick={onCloseDrawerClick}
          role="button"
        >
          <img
            src={close}
            className="menu-icon"
            style={{
              WebkitFilter: "invert(100%)",
            }}
            alt="Menu"
          />
        </div>
      </div>

      <div className="divider"></div>

      <ul className="primary-list">
        {primaryLinks.map((link, i) => (
          <li key={i} tabIndex={i} ref={i === 0 ? primaryItemRef : null}>
            <a className="primary" href="https://www.google.com">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <ul className="menu-footer">
        {footerLinks.map((x, i) => (
          <li key={i}>
            <a className="secondary" href="#">
              {x}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
