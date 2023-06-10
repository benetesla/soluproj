import './Button.scss';
interface ButtonProps {
    name: string;
}
const Button = ({ name }: ButtonProps) => {
    return (
        <button className="navbar__button">
            {name}
        </button>

    )
}

export default Button
