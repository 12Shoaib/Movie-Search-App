import navbar from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={navbar.main_component}>
            <h1 className={navbar.navbar_title}>Movie Searcher</h1>
            <div className={navbar.routing_menu_container}>
                <span className={navbar.routing_menu}>Home</span>
                <span className={navbar.routing_menu}>About</span>
            </div>
        </div>
    )
}

export default Navbar