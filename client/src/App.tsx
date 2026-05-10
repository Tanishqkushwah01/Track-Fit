import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FoodLog from "./pages/FoodLog";
import ActivityLog from "./pages/ActivityLog";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import { useAppContext } from "./context/AppContext";
import Login from "./pages/Login";
import Loading from "./components/Loading";
import Onboarding from "./pages/Onboarding";
import Landing from "./pages/Landing";
import { Toaster } from "react-hot-toast";

function App() {

  const { user, isUserFetched, onboardingCompleted } = useAppContext();

  if (!user) {
    return isUserFetched ? (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    ) : <Loading />
  }

  if (!onboardingCompleted) {
    return <Onboarding />
  }
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='food' element={<FoodLog />} />
          <Route path='activity' element={<ActivityLog />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
