// Packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux actions
import { fetchAuthenticatedUser } from "../store/auth/auth-actions";

// Components
import { Main } from "../components/UI/Main";
import { Routes } from "../routes";
import { Topbar } from "../components/Topbar";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthenticatedUser());
  }, [dispatch]);

  const authenticatedUser = useSelector(
    (state) => state.auth.authenticatedUser
  );

  return (
    <>
      <Topbar authenticatedUser={authenticatedUser} />
      <Main centeredMainAxis vertical>
        <Routes authenticatedUser={authenticatedUser} />
      </Main>
    </>
  );
}
