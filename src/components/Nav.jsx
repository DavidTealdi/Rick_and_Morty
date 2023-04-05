import SearchBar from './SearchBar'
import { NavLink } from 'react-router-dom'

const Nav = ({ onSearch }) => {
    return (
        <div>

            <nav>
                <button>
                    <NavLink to='/home'>Home</NavLink>
                </button>

                <button>
                    <NavLink to='/about'>About</NavLink>
                </button>

                <SearchBar onSearch={onSearch}/>

            </nav>

        </div>
    )
}

export default Nav