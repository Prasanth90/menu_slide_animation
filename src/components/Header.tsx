import { useRef } from "react";
import React from "react";

import menu from "../menu.svg";
import "../App.css";

export interface IHeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export const Header = (props: IHeaderProps) => {
  const { onMenuClick, isMenuOpen } = props;
  const menuButtonRef = useRef<any>();

  React.useEffect(() => {
    if (!isMenuOpen && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  }, [isMenuOpen]);

  return (
    <div className="app-header">
      <h2 className="title">Menu Drawer Sample</h2>
      <div
        ref={menuButtonRef}
        tabIndex={0}
        onClick={onMenuClick}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onMenuClick();
          }
        }}
      >
        <div className="icon-container light" role="button">
          <img src={menu} className="icon" alt="Menu" />
        </div>
      </div>
    </div>
  );
};
