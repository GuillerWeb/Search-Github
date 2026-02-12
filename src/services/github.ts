export async function getUserRepos(username: string) {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=stars&direction=desc&per_page=5`
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar repositórios");
  }

  return res.json();
}
