import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
class NavBar extends Component {
    render() {
        const dogLinks = this.props.dogs.map(dog => {
            return  <li key={dog.name} exact className='nav-item'><NavLink to={`/dogs/${dog.name}`} className='nav-link' >{dog.name}</NavLink></li>

        });
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand' to='/dogs'>Dog App</Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li key='home' exact className='nav-item'>
                            <NavLink to='/dogs' className='nav-link'>Home</NavLink>
                        </li>
                        {dogLinks}
                        <li className='nav-item'>
                            Back
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;
