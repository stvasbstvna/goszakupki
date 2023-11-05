import React from "react";
import { Route, Routes } from "react-router-dom";
import Map from "../components/maps/Map";
import OrganizationsList from "../components/OrganizationsList/OrganizationsList";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/",
      element: <Map />,
    },
    {
      id: 2,
      path: "/login",
      element: "",
    },
    {
      id: 3,
      path: "/register",
      element: "",
    },
    {
      id: 4,
      path: "/organizations",
      element: <OrganizationsList />
    }
  ];
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
