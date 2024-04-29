import BlogList from './BlogList';
import useFetch from './UseFetch';
// import { useState, useEffect } from 'react';



const Home = () => {

	// const [name, setName] = useState('Medo');
	// const [age, setAge] = useState(23);
	// const handleClickAgain = (name, e) => {
	// 	console.log('hello ' + name, e.target);
	// }
	// const handleClick = () => {
	// 	setName('wa3mo');
	// 	setAge(50);
	// 	// console.log('hello ninja', name);
	// }

	const { data: blogs, isPending, error: errorMessage } = useFetch('http://10.13.10.17:8000/blogs');


	return (
		<div className="home">

			{errorMessage && <div className="one">
				<h3>Mabghitch nkhdam ;)</h3>
			</div>}
			{/* <div>{errorMessage}</div> */}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}
			{/* <button onClick={() => setName('Moad')}>Change name</button>
			<p>{name}</p> */}
			{/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario Blogs"/> */}
		</div>
	);
}

export default Home;