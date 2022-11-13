import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {


    return (
        
        <>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} border border-dark`}>
            <div className="container-fluid">
                <Link className="navbar-brand " to="/">{props.title}</Link>
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>

                        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                        {props.mode=='dark' && <input type="color" id="colorInput" style={{height:'1.5rem',outline:'none',width:'2rem'} } onChange={props.changeColor} className="mx-1"/>}
                        

                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )

    
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "set title here",
    aboutText: "About text here"
}