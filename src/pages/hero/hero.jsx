import silpe from "../../assets/silpe2.jpg";

const Hero = () => {
	return (
		<>
			<div className='hero min-h-screen overflow-x-hidden min-w-full bg-base-100'>
				<div className='hero-content flex-col'>
					<img src={silpe} alt='myImage' className='max-w-lg' />
				</div>
			</div>
		</>
	);
};

export default Hero;
