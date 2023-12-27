import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Layout from "@/layout";
import { ErrorElement } from "@/components";
import NotFound from "@/pages/404";
const Index = lazy(() => import("@/pages/index"));
const Test = lazy(() => import("@/pages/test"));

const routes: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
