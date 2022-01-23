import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './_Login.module.scss'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className={styles.login} onClick={() => loginWithRedirect()}>Log In</button>;
};

