import { Outlet } from "react-router-dom";
import classes from "./App.module.css"

export function App() {
  return (
    <div className={classes.app}>
      <h1>Search Github</h1>
      <Outlet />
    </div>
  );
}

