import "./SearchBox.scss";

const SearchBox = (props) => {
    const {label, searchValue, handleInput} = props;

    const labelToUpperCase = label[0].toUpperCase() + label.slice(1);

    return (
        <form className="search-box">
            <label className="search-box__label">
                {labelToUpperCase}
            </label>
            <input
                type="text"
                name={label}
                value={searchValue}
                onInput={handleInput}
                className="search-box__input"
            />
        </form>
    )
}

export default SearchBox;