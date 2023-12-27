import { Button, Result } from "antd";
import { useRouteError } from "react-router-dom";

interface ErrorElementProps {
  message?: string;
}

const ErrorElement = (props: ErrorElementProps) => {
  const { message } = props;
  const error = useRouteError() as Error | undefined;
  return (
    <Result
      status="500"
      title={message}
      subTitle={error?.message}
      extra={
        <Button type="primary" key="console" onClick={() => location.reload()}>
          点击刷新
        </Button>
      }
    />
  );
};

export default ErrorElement;
