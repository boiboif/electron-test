import { Button, Result } from "antd";
import { useNavigate, useRouteError } from "react-router-dom";

interface NotFoundProps {
  message?: string;
}

const NotFound = (props: NotFoundProps) => {
  const { message = "404" } = props;
  const error = useRouteError() as Error | undefined;
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title={message}
      subTitle={error?.message}
      extra={
        <Button type="primary" key="back" onClick={() => navigate(-1)}>
          返回
        </Button>
      }
    />
  );
};

export default NotFound;
