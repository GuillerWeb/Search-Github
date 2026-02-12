import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { RepoProps } from "../types/repo";
import { getUserRepos } from "../services/github";

export function Repos() {
  const { login } = useParams();
  const [repos, setRepos] = useState<RepoProps[]>([]);

  useEffect(() => {
    if (!login) return;

    getUserRepos(login).then(setRepos);
  }, [login]);

  return (
    <div>
      <h2>Melhores repositórios</h2>

      {repos.map((repo) => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <p>⭐ {repo.stargazers_count}</p>
        </div>
      ))}
    </div>
  );
}
