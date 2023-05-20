import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../frontend/components/HomePage"));

const IndexPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <HomePage /> : null;
};

export default IndexPage;
