import '../assets/styles/navigation.css';

const links = [
	{
		id: 1,
		text: 'Home',
		url: '/'
	},
	{
		id: 2,
		text: 'About',
		url: '/about'
	},
	{
		id: 3,
		text: 'Contact',
		url: '/contact'
	}
]

function Navigation () {
	return (
		<nav className="navigation">
			<div className="navigation__container container">
				<ul className="navigation__list">
					{links.map(link => (
						<li key={link.id} className="navigation__item">
							<a className="navigation__link" href={link.url}>{link.text}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;