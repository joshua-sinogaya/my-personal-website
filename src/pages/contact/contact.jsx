const Contact = () => {
	return (
		<>
			<div
				id='contact'
				className='hero min-h-screen w-full bg-base-200 rounded-t-3xl mt-[-2rem] py-10'
			>
				<div className='hero-content flex-col'>
					<div className='text-center'>
						<h1 className='text-5xl font-bold'>Let&apos;s Work Together!</h1>
						<p className='py-6'>
							Feel free to contact me through the any of the following below.
							I&apos;ll be sure to respond as soon as possible!
						</p>
					</div>

					<div className='flex flex-row justify-center gap-x-20'>
						<a
							className='btn btn-error px-10 py-2 text-black text-lg rounded-full text-center'
							href='mailto:josh.sinogaya@gmail.com'
						>
							Email
						</a>
						<a
							className='btn btn-warning px-7 py-2 bg text-black text-lg rounded-full text-center'
							href='https://linkedin.com/in/joshuasinogaya'
						>
							LinkedIn
						</a>
					</div>

					{/* <div className='form-control w-full max-w-xs'>
						<label className='label'>
							<span className='label-text'></span>
							<span className='label-text-alt'></span>
						</label>
						<input
							type='text'
							placeholder='Name'
							className='input input-bordered w-full max-w-xs'
						/>
						<label className='label'>
							<span className='label-text-alt'></span>
							<span className='label-text-alt'></span>
						</label>
						<label className='label'>
							<span className='label-text'></span>
							<span className='label-text-alt'></span>
						</label>
						<input
							type='text'
							placeholder='Email'
							className='input input-bordered w-full max-w-xs'
						/>
						<label className='label'>
							<span className='label-text-alt'></span>
							<span className='label-text-alt'></span>
						</label>
						<label className='label'>
							<span className='label-text'></span>
							<span className='label-text-alt'></span>
						</label>
						<input
							type='text'
							placeholder='Subject'
							className='input input-bordered w-full max-w-xs'
						/>
						<label className='label'>
							<span className='label-text-alt'></span>
							<span className='label-text-alt'></span>
						</label>
						<label className='label'>
							<span className='label-text'></span>
							<span className='label-text-alt'></span>
						</label>
						<textarea
							className='textarea textarea-bordered h-24 resize-none'
							placeholder='Message'
						></textarea>
						<label className='label'>
							<span className='label-text-alt'></span>
							<span className='label-text-alt'></span>
						</label>
						<button className='btn bg-primary hover:bg-secondary w-full mt-3'>
							Send message
						</button>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default Contact;
