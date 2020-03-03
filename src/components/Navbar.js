import React from "react";
import { Link, NavLink, withRouter} from "react-router-dom";

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push("/about")
    // }, 2000)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <NavLink to="/about"> About </NavLink> </li>
                    <li> <NavLink to="/contact"> Contact </NavLink> </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
//withRouter used for the sake of the history property of props

//Link and NavLink used for the sake of letting React to interrupt the request
//from the browser to the server

//props.history.push(`${route}`) use for the sake of redirecting