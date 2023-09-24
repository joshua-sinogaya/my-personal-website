import logo from "../assets/logo.png";

const Header = () => {
	return (
		<>
			<div className='navbar'>
				<div className='navbar-start lg:navbar-end'>
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-base-100 rounded-box w-52'
						>
							<li>
								<a href='#about'>About</a>
							</li>
							<li>
								<a href='#experience'>Experience</a>
							</li>
							<li>
								<a href='#projects'>Projects</a>
							</li>
							<li>
								<a href='#contact'>Contact</a>
							</li>
						</ul>
					</div>
					<a className='invisible lg:visible lg:me-[30rem]'>
						<img src={logo} alt='' className='max-w-[45px]' />
					</a>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1 text-2xl'>
						<li>
							<a href='#about'>About</a>
						</li>
						<li>
							<a href='#experience'>Experience</a>
						</li>
						<li>
							<a href='#projects'>Projects</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
