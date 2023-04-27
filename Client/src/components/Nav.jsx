import SearchBar from './SearchBar'
import { NavLink } from 'react-router-dom'

const Nav = ({ onSearch, setAccess }) => {

    const handlelogOut = () => {
        setAccess(false);
    }

    return (
        <div>

            <nav>
                <button>
                    <NavLink to='/home'>Home</NavLink>
                </button>

                <button>
                    <NavLink to='/about'>About</NavLink>
                </button>

                <button>
                    <NavLink to='/favorites'>Favorites</NavLink>
                </button>
                
                {/* <NavLink to='/'>Log out</NavLink> */}

                <button onClick={handlelogOut}>Log Out</button>

                <SearchBar onSearch={onSearch}/>
            </nav>

        </div>
    )
}

export default Nav