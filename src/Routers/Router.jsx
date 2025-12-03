import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import About from "../Pages/About";
import CategoryCard from "../Pages/SkillsCard";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllSkills from "../Pages/AllSkills";
import Error from "../Pages/Error";
import SkillDetails from "../Pages/SkillDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import ForgetPass from "../Pages/ForgetPass";
import ContactPage from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/my-profile", Component: MyProfile },
      { path: "/about", Component: About },
      { path: "/all-skills", Component: AllSkills },
      { path: "/contact", Component: ContactPage },
      {
        path: "/skill-details/:skillId",
        Component: SkillDetails,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "/auth/login", Component: Login },
      { path: "/auth/register", Component: Register },
      { path: "/auth/forget-password", Component: ForgetPass },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);

export default router;
