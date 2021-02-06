import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import UpdateProfile from "./components/UpdateProfile";
import Profile from "./components/Profile";
import CoursePage from "./components/CoursePage";
import Login from "./components/Login";

const routes = [
  {
    path: "/login",
    component: Login,
    isPrivateLink: false,
  },
  {
    path: "/signup",
    component: Signup,
    isPrivateLink: false,
  },
  {
    path: "/forgotpassword",
    component: ForgotPassword,
    isPrivateLink: false,
  },
  {
    path: "/updateprofile",
    component: UpdateProfile,
    isPrivateLink: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    isPrivateLink: true,
  },
  {
    path: "/profile",
    component: Profile,
    isPrivateLink: true,
  },
  {
    path: "/course/:courseId",
    component: CoursePage,
    isPrivateLink: true,
  },
];

export default routes;
