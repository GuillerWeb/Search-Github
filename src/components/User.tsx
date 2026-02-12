import { MdLocationPin } from "react-icons/md";
import type { UserProps } from "../types/user";
//import { Link } from "react-router-dom";
import classes from "./User.module.css";

export const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
  html_url,
}: UserProps) => {
  return (
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.user}
    >
      <img
        src={avatar_url}
        alt={login}
        className={classes.avatar}
      />
      <h2 className={classes.name}>{login}</h2>

      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div className={classes.stats}>
        <div>
          <span>Seguidores</span>
          <p className={classes.number}>{followers}</p>
        </div>

        <div>
          <span>Seguindo</span>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
    </a>
  );
};
