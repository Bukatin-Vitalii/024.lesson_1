import logo from '../assets/svg/logo.svg'
import '../assets/styles/header.css'

function Header() {
	return (
		<header className="header">
			<div className="header__container container">
			<img className='header__logo' src={logo} alt="logo" />
			<h1 className='header__title'>Header</h1>
			</div>
		</header>
	);
}

export default Header;