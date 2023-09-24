import silpe from "../../assets/silpe2.jpg";
import "./hero.css";

const Hero = () => {
	return (
		<>
			<div id='home' className='hero min-h-screen bg-base-100'>
				<div className='hero-content flex-col lg:flex-row-reverse mt-[-5rem] 4fiddy:mt-0'>
					<h1 className='text-5xl font-bold lg:hidden'>&lt;Josh /&gt;</h1>
					<div className='hidden lg:block'>
						<h1 className='text-5xl font-bold'>&lt;Josh /&gt;</h1>
						<h1 className='text-3xl font-semibold mt-5'>Full Stack Dev</h1>
						<a className='btn glass mt-5' href='#'>
							Download CV
						</a>
					</div>
					<img
						src={silpe}
						alt='myImage'
						className='w-full rounded-full max-w-lg lg:pe-5'
					/>
					<h1 className='text-3xl font-semibold lg:hidden'>Full Stack Dev</h1>
					<div className='flex flex-row lg:hidden'>
						<div className='navbar-end'>
							<a className='btn glass mt-5' href='#'>
								Download CV
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
