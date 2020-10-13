import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { FeatureProvider } from './Context'
import AdminPage from "./pages/Admin";
import UserPage from "./pages/User";

export default function App() {
  return (
    <FeatureProvider>
      <Router>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">User page</Link>
          <Link to="/admin">Admin page</Link>
        </Breadcrumbs>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/">
            <UserPage />
          </Route>
        </Switch>
      </Router>
    </FeatureProvider>
  );
}