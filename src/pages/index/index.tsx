import { Button } from "antd";
import { useState } from "react";

const Index = () => {
  const [state, setState] = useState(0);

  return (
    <div className="p-4">
      <Button type="primary" onClick={() => setState((pre) => pre + 1)}>
        {state}
      </Button>
    </div>
  );
};

export default Index;
