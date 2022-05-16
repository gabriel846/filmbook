// Packages
import { Redirect, Route, Switch } from "react-router-dom";

// Pages
import { Authentication } from "../pages/auth/Authentication";
import { FavoriteMovies } from "../pages/dashboard/FavoriteMovies";
import { Home } from "../pages/dashboard/Home";
import { MovieDetails } from "../pages/dashboard/MovieDetails/MovieDetails";
import { NotFound } from "../pages/dashboard/NotFound";
import { UserProfile } from "../pages/dashboard/UserProfile/UserProfile";

export function Routes(props) {
  const { authenticatedUser } = props;

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/authentication">
        {!!!authenticatedUser ? <Authentication /> : <Redirect to="/" />}
      </Route>
      <Route path="/details/:id">
        <MovieDetails />
      </Route>
      <Route exact path="/favorite-movies">
        {!!authenticatedUser ? <FavoriteMovies /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/profile">
        {!!authenticatedUser ? <UserProfile /> : <Redirect to="/" />}
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
