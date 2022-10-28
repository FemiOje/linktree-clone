import './App.css';
import SlackLogo from './images/slack-logo.png';
import GitHubLogo from './images/github-logo.png';
import ZuriInternshipLogo from './images/zuri-internship-logo.png';
import i4gLogo from './images/i4g-logo.png';

function App() {
	return (
		<>
			<section className='profile'>
				<h1>Linktree Clone</h1>
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
				<img src={SlackLogo} alt='slack'/>
				<img src={GitHubLogo} alt='github'/>
			</section>

			<footer>
				<hr/>
				<section className='footer-logos'>
					<div className='zuri-internship-logo'>
						<img 
							src={ZuriInternshipLogo} 
							alt='zuri-internship' 
						/>
					</div>

					<div className='footer-text'>
						<p>HNG Internship 9 Frontend Task</p>
					</div>

					<div className='i4g-logo'>
						<img src={i4gLogo} alt='i4g' />
					</div>
				</section>
			</footer>
		</>
	);
}

export default App;