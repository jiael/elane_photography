import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }


    return(
        <>
        <body class='home'>
            <header class={`primary-header flex ${showLinks ? "show-nav" : "hide-nav"}`}>
                <div class='ff-LOGO'>
                    <Link to='/'><strong>elane</strong>_photography</Link>
                </div>

                <nav>
                    <button class='mobile-nav-toggle' onClick = {handleShowLinks}>
                        <span class='burger-bar'></span>
                    </button>
                    <ul className='primary-navigation flex'>
                        <li class='slideInDown1' onClick = {handleShowLinks}>
                            <Link to='/' class='ff-source-code-pro-monospace'>HOME</Link>                            {/* <a class='ff-source-code-pro-monospace' href='/elane_photography'>
                                <span aria-hidden="true"></span>HOME
                            </a> */}
                        </li>
                        <li> 
                        <Link to='/featured' class='ff-source-code-pro-monospace slideInDown2' onClick = {handleShowLinks}>FEATURED</Link>  
                            {/* <a class='ff-source-code-pro-monospace slideInDown2' href='/elane_photography/featured'>
                                <span aria-hidden="true"></span>FEATURED
                            </a> */}
                        </li>
                        <li>
                            <Link to='/about' class='ff-source-code-pro-monospace slideInDown3' onClick = {handleShowLinks}>ABOUT</Link>
                            {/* <a class='ff-source-code-pro-monospace slideInDown3' href='/elane_photography/about'>
                                <span aria-hidden="true"></span>ABOUT
                            </a> */}
                        </li>
                        <li class='slideInDown4' onClick = {handleShowLinks}>
                            <a href='https://www.instagram.com/elane_photography/'>
                                <span aria-hidden="true"><i className='fab fa-instagram'> </i></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </body>
        </>
    );
}

export default Navbar