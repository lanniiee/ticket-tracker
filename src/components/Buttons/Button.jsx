import "./Button.scss";


const Button = (props) => {
    const {click, name} = props;
    let buttonStyle = "button";
    if (name === "positive") {
        buttonStyle += " positive";
    } else if (name === "negative") {
        buttonStyle += " negative";
    }
    
    return (
        <button className={buttonStyle} onClick={click}>{props.value}</button>
    )
}

export default Button;