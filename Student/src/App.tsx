import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import AssessmentWorkspace from "./AssessmentWorkspace";
import ProfilePage from "./ProfilePage";

type View = "dashboard" | "assessment" | "profile";

export default function App() {
  const [dark, setDark] = useState(false);
  const [view, setView] = useState<View>("dashboard");
  const [openAssessment, setOpenAssessment] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => setDark((d) => !d);

  if (view === "assessment" && openAssessment) {
    return (
      <AssessmentWorkspace
        assessmentName={openAssessment}
        dark={dark}
        onToggleTheme={toggleTheme}
        onBack={() => { setView("dashboard"); setOpenAssessment(null); }}
      />
    );
  }

  if (view === "profile") {
    return (
      <ProfilePage
        dark={dark}
        onToggleTheme={toggleTheme}
        onBack={() => setView("dashboard")}
      />
    );
  }

  return (
    <Dashboard
      dark={dark}
      onToggleTheme={toggleTheme}
      onOpenAssessment={(name) => { setOpenAssessment(name); setView("assessment"); }}
      onOpenProfile={() => setView("profile")}
    />
  );
}
