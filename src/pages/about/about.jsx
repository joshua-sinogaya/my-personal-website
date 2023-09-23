const About = () => {
	return (
		<>
			<div
				id='about'
				className='hero min-h-screen bg-white text-black rounded-t-3xl'
			>
				<div className='hero-content flex-col my-5'>
					<div className='lg:w-[70%]'>
						<h1 className='text-center lg:text-start text-3xl md:text-4xl lg:text-5xl font-bold'>
							About me
						</h1>
						<div className=''>
							<h1 className='text-center lg:text-start text-2xl md:text-3xl lg:text-4xl font-semibold mt-5'>
								Full Stack Developer && Software Developer. Fugiat sit eiusmod
								quis laborum proident culpa voluptate ut in.
							</h1>
							<h1 className='text-center lg:text-justify text-1xl md:text-2xl lg:text-3xl font-regular mt-5'>
								Industrious and career-focused fresh graduate, with a strong
								drive to succeed and passion for technology. Committed to
								learning and staying up-to-date with industry trends with a
								commitment to personal and professional growth.
							</h1>
						</div>
					</div>
					<div className='my-5 lg:mt-[3.5rem] lg:w-[70%]'>
						<div className='flex flex-col md:flex-row justify-around'>
							<div className='flex-col bg-black text-white p-5 rounded-2xl mt-5 lg:mt-0 md:w-[49%]'>
								<h1 className='text-start text-2xl md:text-3xl font-semibold'>
									Languages
								</h1>
								<div className='flex flex-row flex-wrap justify-start mt-5 gap-y-2 gap-x-2'>
									<h1 className='bg-white text-black p-2 rounded-2xl'>HTML</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>CSS</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>
										JavaScript
									</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>PHP</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>SQL</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>C#</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>
										Python
									</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>Java</h1>
								</div>
							</div>
							<div className='flex-col bg-black text-white p-5 rounded-2xl mt-5 lg:mt-0 md:w-[49%]'>
								<h1 className='text-start text-2xl md:text-3xl font-semibold'>
									Libraries/Frameworks
								</h1>
								<div className='flex flex-row flex-wrap justify-start mt-5 gap-y-2 gap-x-2'>
									<h1 className='bg-white text-black p-2 rounded-2xl'>React</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>.NET</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>
										JQuery
									</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>
										Tailwind
									</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>
										Bootstrap
									</h1>
									<h1 className='bg-white text-black p-2 rounded-2xl'>
										daisyUI
									</h1>
								</div>
							</div>
						</div>
						<div className='flex flex-col bg-black text-white p-5 rounded-2xl mt-5'>
							<h1 className='text-start text-2xl md:text-3xl font-semibold'>
								Tools/IDE
							</h1>
							<div className='flex flex-row flex-wrap mt-5 justify-start gap-y-2 gap-x-2'>
								<h1 className='bg-white text-black p-2 rounded-2xl'>VSCode</h1>
								<h1 className='bg-white text-black p-2 rounded-2xl'>
									Visual Studio
								</h1>
								<h1 className='bg-white text-black p-2 rounded-2xl'>Node.js</h1>
								<h1 className='bg-white text-black p-2 rounded-2xl'>
									GitHub Desktop
								</h1>
								<h1 className='bg-white text-black p-2 rounded-2xl'>
									GitKraken
								</h1>
								<h1 className='bg-white text-black p-2 rounded-2xl'>
									Android Studio
								</h1>
								<h1 className='bg-white text-black p-2 rounded-2xl'>
									NetBeans
								</h1>
								<h1 className='bg-white text-black p-2 rounded-2xl'>Figma</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
