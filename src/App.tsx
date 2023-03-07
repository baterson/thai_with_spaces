import React, { useState } from "react";
import { SideMenu } from "./SideMenu";

const segmenter = new Intl.Segmenter("th", { granularity: "word" });

const withSpaces = (text) => {
  const it = segmenter.segment(text)[Symbol.iterator]();
  var c = [...it].map((value) => value.segment).join("  ");
  return c;
};

const Wrapper = ({ children }) => {
  return (
    <div className="relative h-full w-full box-border flex flex-col flex-wrap">
      {children}
    </div>
  );
};

const Input = ({
  onChange,
  value,
  isDisabled,
  fontSize,
  onClick,
  fontFamily,
}) => {
  return (
    <textarea
      value={value}
      disabled={isDisabled}
      onChange={onChange}
      onClick={() => onClick()}
      lang="th"
      className={`h-full w-full bg-inherit no-underline flex-1 pt-20 px-20 ${fontSize} ${fontFamily}`}
    />
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button className="h-20" onClick={onClick}>
      {children}
    </button>
  );
};

function App() {
  const [inputActive, setInputState] = useState(true);
  const [inputValue, setInputValue] = useState("ฉันไปกิน");
  const [isMenuOpen, setMenuOpenState] = useState(false);
  const [fontSize, setFontsize] = useState("text-2xl");
  const [fontFamily, setFontFamily] = useState("font-sans");

  return (
    <Wrapper>
      <Menu onClick={() => setMenuOpenState(!isMenuOpen)} />
      <SideMenu
        setFontSize={setFontsize}
        isOpen={isMenuOpen}
        setFontFamily={setFontFamily}
        onClose={() => setMenuOpenState(false)}
      />
      <Input
        isDisabled={!inputActive}
        fontSize={fontSize}
        fontFamily={fontFamily}
        onClick={() => setMenuOpenState(false)}
        value={inputActive ? inputValue : withSpaces(inputValue)}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={() => setInputState(!inputActive)}>
        {inputActive ? "Add spaces" : "Start typing"}
      </Button>
    </Wrapper>
  );
}

const Menu = ({ onClick }) => {
  return (
    <svg
      onClick={() => onClick()}
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute top-3 left-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

export default App;
