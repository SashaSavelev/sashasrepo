import './Header.scss'
const Header = (props) =>  {
    return(
        <header className="header">
        <div className="logo">@</div> 
        <nav>
            <a href="#">ссылка</a>
            <a href="#">ссылка</a>
            <a href="#">ссылка</a>
            <a href="#">ссылка</a>
        </nav>
        
        <div className="main">main</div>
                    </header>
    )
}
export default Header;