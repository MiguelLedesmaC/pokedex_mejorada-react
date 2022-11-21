import './Navbar.css';

const Navbar = ()=> {
    let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
    return(
        <nav className='nav'>
            <div />
           <div>
            <img src={imgUrl}
                alt='copy-logo'
                className='navbar-image' />
            </div>
            <div>🖤</div>
        </nav>
    )
}

export {Navbar}