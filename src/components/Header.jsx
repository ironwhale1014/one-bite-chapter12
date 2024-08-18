import "./Header.css";

const Header = ({title, leftChild, rightChild}) => {
    return (
        <div className="header">
            <div className="leftChild">{leftChild}</div>
            <div className="title">{title}</div>
            <div className="rightChild">{rightChild}</div>
        </div>
    );
}

export default Header;