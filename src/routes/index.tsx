import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import StartProcessPage from "../pages/StartProcessPage";
import ScheduleInterviewPage from "../pages/ScheduleInterviewPage";
import DisqualifyPage from "../pages/DisqualifyPage";
import ApprovePage from "../pages/ApprovePage";
import StatusPage from "../pages/StatusPage";
import ApprovedCandidatesPage from "../pages/ApprovedCandidatesPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/iniciar",
    element: <StartProcessPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/entrevista",
    element: <ScheduleInterviewPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/desqualificar",
    element: <DisqualifyPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/aprovar",
    element: <ApprovePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/status",
    element: <StatusPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/aprovados",
    element: <ApprovedCandidatesPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <NotFoundPage />,
  },
]);