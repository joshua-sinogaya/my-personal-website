import project1 from "../../assets/project1.jpg";

const Projects = () => {
	return (
		<>
			<div id='projects' className='hero min-h-screen bg-red-500'>
				<div className='hero-content'>
					<div className='card w-full bg-base-100 shadow-xl'>
						<figure>
							<img src={project1} alt='ProjectImage' />
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>
								Project Name
								<div className='badge badge-secondary'>Code</div>
								<div className='badge badge-secondary'>Live</div>
							</h2>
							<p>
								Tempor commodo pariatur amet sit duis sit sunt do ex elit
								aliqua.
							</p>
							<div className='card-actions justify-end'>
								<div className='badge badge-outline'>Fashion</div>
								<div className='badge badge-outline'>Products</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
