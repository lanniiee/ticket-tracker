import "./CardTile.scss";
import Counter from "../Counter/Counter.jsx";

const CardTile = (props) => {
    const {users} = props
    const eachCardTile = users.map((user) => (
        <div className="user" key={user.id}>
            <img src={user.imgUrl} alt="background" className="user__background"/>
            <div className="user__wrapper">
                <h2 className="user__name">Name: {user.name}</h2>
                <h2 className="user__role">Role: {user.role}</h2>
                <Counter/>
            </div>
        </div>
    ));
    return (
        <>
            <div className="users">
                {eachCardTile}
            </div>
        </>

    )
}

export default CardTile;