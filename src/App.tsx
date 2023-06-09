import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setIsMenuOpen(false);
        }
      }}
    >
      <Header
        onMenuClick={() => {
          setIsMenuOpen(true);
        }}
        isMenuOpen={isMenuOpen}
      />
      <Menu open={isMenuOpen} onCloseDrawerClick={() => setIsMenuOpen(false)} />
    </div>
  );
}

export default App;
