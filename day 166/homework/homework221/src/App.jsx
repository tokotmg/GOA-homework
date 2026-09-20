import { useState, useEffect } from "react";
export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    console.log("theme changed");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const styles = {
    backgroundColor: isDarkMode ? "#333" : "#FFF",
    color: isDarkMode ? "#FFF" : "#333",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={styles}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>
        Toggle Background Color
      </button>
    </div>
  );
}
