type SearchProps = {
    loadUser: (userName: string) => Promise<void>
};

import { BsSearch } from "react-icons/bs"
import { useState, type KeyboardEvent } from "react";
import classes from "./Search.module.css";

export const Search_bar = ({ loadUser }: SearchProps) => {

    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            loadUser(userName);
        }
    };



    return (
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <small>Clique na interface do perfil e acesse o github do usuário</small>
            <div className={classes.search_container}>
                <input type="text"
                    placeholder="Digite o nome do usuário"
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}