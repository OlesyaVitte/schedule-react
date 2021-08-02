import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

import { RootState } from "flux";
import { withAuthRedirect } from "hoc/authRedirect";

const Home = () => {
  const router = useRouter();

  return <div>Home</div>;
};
export default withAuthRedirect(Home);
