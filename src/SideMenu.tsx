import React, { useState } from "react";

const MENU_ITEMS = {
  none: "",
  fontSize: "Fontsize",
  fontFamily: "FontFamily",
};

export const SideMenu = ({ isOpen, onClose, setFontSize, setFontFamily }) => {
  const [activeMenu, setActiveMenu] = useState(MENU_ITEMS.none);

  const handleItemClick = (menuItem) => () => {
    if (menuItem === activeMenu) {
      setActiveMenu(MENU_ITEMS.none);
    } else {
      setActiveMenu(menuItem);
    }
  };
  const handleCLose = () => {
    setActiveMenu(MENU_ITEMS.none);
    onClose();
  };

  let className =
    "select-none fixed top-0 left-0 z-1 w-64 h-screen p-4 overflow-y-auto transition-transform backdrop-blur-3xl";

  if (!isOpen) {
    className += " -translate-x-full";
  }

  return (
    <div
      id="drawer-navigation"
      className={className}
      aria-labelledby="drawer-navigation-label"
    >
      <button
        onClick={() => handleCLose()}
        aria-controls="drawer-navigation"
        className="bg-transparent text-xl p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
      >
        X
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <button
              onClick={handleItemClick(MENU_ITEMS.fontSize)}
              className="flex items-center w-full text-base font-normal"
              aria-controls="dropdown-font-size"
              data-collapse-toggle="dropdown-font-size"
            >
              Font sizes
            </button>
            {activeMenu === MENU_ITEMS.fontSize && (
              <ul id="dropdown-example" className="py-2 space-y-2">
                {[
                  "text-2xl",
                  "text-3xl",
                  "text-4xl",
                  "text-5xl",
                  "text-6xl",
                ].map((fontSize) => (
                  <li className={fontSize}>
                    <button onClick={() => setFontSize(fontSize)}>Aaaa</button>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* <li>
            <button
              onClick={handleItemClick(MENU_ITEMS.fontFamily)}
              className="flex items-center w-full text-base font-normal"
              aria-controls="dropdown-font-size"
              data-collapse-toggle="dropdown-font-size"
            >
              Font family
            </button>
            {activeMenu === MENU_ITEMS.fontFamily && (
              <ul id="dropdown-example" className="py-2 space-y-2 text-xl">
                {["font-itim", "font-serif", "font-mono"].map((fontFamily) => (
                  <li className={fontFamily}>
                    <button onClick={() => setFontFamily(fontFamily)}>
                      ตั้งค่าตัวอักษร
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li> */}
        </ul>
      </div>
    </div>
  );
};
