import React from "react";
import Login from "./Login";

const LoginPage = async ({ searchParams }) => {
  const { callbackUrl = "/", error } = await searchParams;

  return (
    <>
      <Login callbackUrl={callbackUrl} />
    </>
  );
};

export default LoginPage;
