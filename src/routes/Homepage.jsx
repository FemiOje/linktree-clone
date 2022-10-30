import '../App.css';
import SlackLogo from '../images/slack-logo.png';
import GitHubLogo from '../images/github-logo.png';
import profileImg from '../images/profile__img.png';
import shareButton from '../images/share-button.png';
import menuButton from '../images/menu-button.png';
import Footer from '../components/Footer';

function Homepage() {
	return (
		<main>
			<section className='profile'>
				<div className='profile-image-container'>
					<img
						src={profileImg}
						className='profile-image'
						alt='profile'
					/>

					<div className='profile-overlay'>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 8.37722C2 8.0269 2 7.85174 2.01462 7.70421C2.1556 6.28127 3.28127 5.1556 4.70421 5.01462C4.85174 5 5.03636 5 5.40558 5C5.54785 5 5.61899 5 5.67939 4.99634C6.45061 4.94963 7.12595 4.46288 7.41414 3.746C7.43671 3.68986 7.45781 3.62657 7.5 3.5C7.54219 3.37343 7.56329 3.31014 7.58586 3.254C7.87405 2.53712 8.54939 2.05037 9.32061 2.00366C9.38101 2 9.44772 2 9.58114 2H14.4189C14.5523 2 14.619 2 14.6794 2.00366C15.4506 2.05037 16.126 2.53712 16.4141 3.254C16.4367 3.31014 16.4578 3.37343 16.5 3.5C16.5422 3.62657 16.5633 3.68986 16.5859 3.746C16.874 4.46288 17.5494 4.94963 18.3206 4.99634C18.381 5 18.4521 5 18.5944 5C18.9636 5 19.1483 5 19.2958 5.01462C20.7187 5.1556 21.8444 6.28127 21.9854 7.70421C22 7.85174 22 8.0269 22 8.37722V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V8.37722Z" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M12 16.5C14.2091 16.5 16 14.7091 16 12.5C16 10.2909 14.2091 8.5 12 8.5C9.79086 8.5 8 10.2909 8 12.5C8 14.7091 9.79086 16.5 12 16.5Z" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
				</div>


				<br />
				<br />

				<a id='twitter' href='https://wwww.twitter.com/FemiOje'>
					<strong>Oluwafemi Ojetokun</strong>
				</a>

				<p id='slack'>Oluwafemi Ojetokun</p>

				<button className='share-button'>
					<img src={shareButton} alt='share' title='Share link' />
				</button>

				<button className='menu-button'>
					<img src={menuButton} alt='menu' title='Menu' />
				</button>
			</section>

			<section className='links'>
				<a
					id='btn__zuri'
					href='https://training.zuri.team/'
					target={'_blank'}
					rel="noreferrer"
				>
					<button>Twitter Link</button>
				</a>
				<br />

				<a
					id='books'
					href='http://books.zuri.team'
					target={'_blank'}
					rel="noreferrer"
				>
					<button>Zuri Team</button>
				</a>
				<br />

				<a
					id='book__python'
					href='https://books.zuri.team/python-for-beginners?ref_id=Oluwafemi%20Ojetokun' target={'_blank'}
					rel="noreferrer"
				>
					<button>Zuri Books</button>
				</a>
				<br />

				<a
					id='pitch'
					href='https://background.zuri.team'
					target={'_blank'}
					rel="noreferrer"
				>
					<button>Python Books</button>
				</a>
				<br />

				<a
					id='pitch'
					href='https://background.zuri.team'
					target={'_blank'}
					rel="noreferrer"
				>
					<button>Background Check for Coders</button>
				</a>
				<br />

				<a
					id='book__design'
					href='https://books.zuri.team/design-rules'
					target={'_blank'}
					rel="noreferrer"
				>
					<button>Design Books</button>
				</a>
				<br />

			</section>

			<section className='logos'>
				<a href="https://github.com/FemiOje/linktree-clone">
					<img src={SlackLogo} alt='slack' />
				</a>
				<a href="https://github.com/FemiOje/linktree-clone">
					<img src={GitHubLogo} alt='github' />
				</a>
			</section>

			<Footer />
		</main>
	);
}

export default Homepage;