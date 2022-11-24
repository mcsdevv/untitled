"use client";

// * Libraries
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  console.log("theme", theme);
  return (
    <div>
      {theme === "dark" ? (
        <MoonIcon onClick={() => setTheme("light")} />
      ) : (
        <SunIcon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
