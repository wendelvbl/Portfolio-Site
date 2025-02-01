import { Link } from "react-router-dom";


const Header = () => {
    
    return(
       <header>
        <div className="name">Wendel Van Brusselen Landuyt</div>
        <nav>
            <Link className="aNav" to={"/"}>Home</Link>
            <Link className="aNav" to={"/about"}>About</Link>
            <Link className="aNav" to={"/blog"}>Blog</Link>
        </nav>
       </header>
    )
}

export default Header;