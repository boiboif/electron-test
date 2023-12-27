import { CloseOutlined, FullscreenOutlined, FullscreenExitOutlined, MinusOutlined } from "@ant-design/icons";
import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const FullscreenIcon = isFullScreen ? FullscreenExitOutlined : FullscreenOutlined;

  useEffect(() => {
    window.customApi.onMaximize(() => setIsFullScreen(true));
    window.customApi.onUnmaximize(() => setIsFullScreen(false));
  }, []);

  return (
    <div>
      <div
        className="flex h-[50px] px-4 app-drag gap-x-2 items-center justify-between"
        style={{ borderBottom: "1px solid #eee" }}
      >
        <div className="flex gap-x-4 items-center">
          <NavLink className="no-drag" to="" unstable_viewTransition>
            首页
          </NavLink>
          <NavLink className="no-drag" to="test" unstable_viewTransition>
            测试页
          </NavLink>
        </div>

        <div className="flex gap-x-4 items-center">
          <MinusOutlined
            onClick={() => window.customApi.minimize()}
            className="cursor-pointer no-drag hover:text-slate-500"
          />
          <FullscreenIcon
            onClick={() => window.customApi.toogleMaximize()}
            className="cursor-pointer no-drag hover:text-slate-500"
          />
          <CloseOutlined
            onClick={() => window.customApi.quit()}
            className="cursor-pointer no-drag hover:text-slate-500"
          />
        </div>
      </div>

      <div>
        <Suspense fallback={<div>加载中</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
