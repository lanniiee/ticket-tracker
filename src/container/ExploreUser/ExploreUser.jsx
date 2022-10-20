import "./ExploreUser.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import CardTile from "../../components/CardTile/CardTile.jsx";
import { useState } from "react";

const ExploreUser = (props) => {
    const {users} = props;

    const [searchValue, setSearchValue] = useState("");

    const handleInput = (event) => {
        const lowerCaseInput = event.target.value.toLowerCase();
        setSearchValue(lowerCaseInput);
    };

    const filteredUsers = users.filter(user => {
        const lowerCaseUser = user.name.toLowerCase();
        return lowerCaseUser.includes(searchValue);
    });

    return (
        <>
            <SearchBox
                label={"user"}
                searchValue={searchValue}
                handleInput={handleInput}
            />
            <CardTile title={"Results"} users={filteredUsers}/>
        </>
    )
}

export default ExploreUser;