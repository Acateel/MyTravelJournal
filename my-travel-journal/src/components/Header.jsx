import logo from "../../public/logo.png"

export default function Header() {
    return (
        <header>
            <img className="header-logo" src={logo}/>
            <p className="header-text">my travel journal.</p>
        </header>
    )
}