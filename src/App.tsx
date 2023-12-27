import { Suspense } from "react";
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from "antd";
import { createHashRouter, RouterProvider } from "react-router-dom";
import dayjs from "dayjs";
import zhCN from "antd/locale/zh_CN";
import routes from "./router";
import "dayjs/locale/zh-cn";
import "antd/dist/reset.css";
import "./index.css";

dayjs.locale("zh-cn");

const router = createHashRouter(routes);

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <StyleProvider hashPriority="high">
        <Suspense fallback={<div>加载中</div>}>
          <RouterProvider router={router}></RouterProvider>
        </Suspense>
      </StyleProvider>
    </ConfigProvider>
  );
};

export default App;
