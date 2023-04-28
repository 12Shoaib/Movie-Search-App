import navbar from './navbar.module.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const redirectAbout =() => {
        navigate('/about')
    }
    const redirectHome =() => {
        navigate('/')
    }
    return (
        <div className={navbar.main_component}>
            <h1 className={navbar.navbar_title}>Movie Searcher</h1>
            <div className={navbar.routing_menu_container}>
                <span className={navbar.routing_menu} onClick={redirectHome}>Home</span>
                <span className={navbar.routing_menu} onClick={redirectAbout}>About</span>
            </div>
        </div>
    )
}

export default Navbar