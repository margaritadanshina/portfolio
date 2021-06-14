import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
    <div>
        <h1>Portfolio</h1>
        <nav>
            {isLoggedIn ? (
                <div>
                    <Link to='/home'>Home</Link>
                    <a href="#" onClick={handleClick}>
                        Logout
                    </a>
                </div>
            ) : (
                <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            )}
        </nav>
        <hr />
    </div>
)

const mapState = state => {
    return {
        isLoggedIn: !!state.auth.id
    }
}

const mapDispatch = dispatch => {
    return {
        handleClick() {
            dispatch(logout())
        }
    }
}

export default connect(mapState, mapDispatch)(Navbar)