import { useEffect, useState } from "react";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import { router } from "./routes";

export function AppLayout() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => setDark((d) => !d);

  return <Outlet context={{ dark, toggleTheme }} />;
}

// Recreate router here if needed or inject AppLayout into the existing router
// Actually, it's cleaner to just render RouterProvider with our router, 
// and update `src/routes/index.tsx` to use AppLayout.

export default function App() {
  return <RouterProvider router={router} />;
}
