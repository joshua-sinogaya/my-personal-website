import silpe from "../../assets/silpe2.jpg";

const Hero = () => {
	return (
		<>
			<div className='hero min-h-screen overflow-x-hidden bg-base-100'>
				<div className='hero-content flex-col lg:flex-row-reverse mt-[-5rem] 4fiddy:mt-0'>
					<h1 className='text-5xl font-bold'>I&apos;m Josh.</h1>
					<img
						src={silpe}
						alt='myImage'
						className='w-full rounded-full max-w-lg'
					/>
				</div>
			</div>
		</>
	);
};

export default Hero;
