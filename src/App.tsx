import { useEffect, useState } from "react";
import { ConfigProvider, DatePicker, message } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from "dayjs";

import "dayjs/locale/zh-cn";

import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";
import "./index.css";
import { Test } from "@/components";

dayjs.locale("zh-cn");

const App = () => {
  const [date, setDate] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const handleChange = (value: dayjs.Dayjs) => {
    messageApi.info(
      `您选择的日期是: ${value ? value.format("YYYY年MM月DD日") : "未选择"}`
    );
    setDate(value);
  };

  useEffect(() => {
    window.versions.ping().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <ConfigProvider locale={zhCN}>
      <div>
        <Test />
        <div>{window.versions.node()}</div>
        <div>{window.versions.chrome()}</div>
        <div>{window.versions.electron()}</div>
        <DatePicker onChange={handleChange} />
        <div className="text-red-500">
          当前日期：{date ? date.format("YYYY年MM月DD日") : "未选择"}
        </div>
      </div>
      {contextHolder}
    </ConfigProvider>
  );
};

export default App;
