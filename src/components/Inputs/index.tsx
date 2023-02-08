import "./style.css"

type inputsProps = {
    text: string;
}

function Inputs(props: inputsProps) {

    return (
            <input type={props.text} name={props.text} id={props.text} placeholder={props.text} />
    );
}

export default Inputs