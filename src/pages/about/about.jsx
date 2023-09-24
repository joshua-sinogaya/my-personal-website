import Experience from "../../assets/experience.png";

const About = () => {
	return (
		<>
			<div
				id='about'
				className='container min-w-full text-center min-h-fit flex justify-center bg-white text-black rounded-t-3xl'
			>
				<div className='flex-col justify-center py-10 pb-[7rem] md:w-[60%]'>
					<p className='lg:text-xl text-accent'>Get To Know More</p>
					<p className='text-4xl lg:text-5xl font-bold'>About Me</p>
					<div className='flex flex-row justify-center w-full mt-5'>
						<div className='w-[90%] text-justify lg:text-xl'>
							I&apos;m an industrious and career-focused professional seeking a
							CS/IT role where I can leverage my skills and gain valuable
							experience to contribute effectively to the success of your
							company. My strengths include active listening, strong leadership
							abilities, effective communication, and a strong drive for
							success. I thrive in fast-paced and dynamic environments,
							constantly motivated by the challenge of learning new things and
							solving problems.
						</div>
					</div>
					<div className='flex flex-row justify-around mt-10 '>
						<div className='border border-accent rounded-2xl p-5 text-center w-[47%]'>
							<img src={Experience} alt='' className='h-[2rem] block mx-auto' />
							<p className='text-2xl font-bold mb-5'>Awards</p>
							<p className='text-xl font-regular'>Cum Laude</p>
							<p className='text-xl font-regular'>Dean&apos;s Lister</p>
							<p className='text-xl font-regular'>
								Exemplary Academic Performance
							</p>
						</div>
						<div className='border border-accent rounded-2xl p-5 text-center w-[47%]'>
							<img src={Experience} alt='' className='h-[2rem] block mx-auto' />
							<p className='text-2xl font-bold mb-5'>Education</p>
							<p className='text-xl font-regular'>BS Computer Science</p>
							<p className='text-xl font-regular'>
								Graduated with GWA of 1.5386
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
