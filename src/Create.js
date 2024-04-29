import { useHistory } from 'react-router-dom';
import { useState } from "react";

const CreateBlog = () => {

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setauthor] = useState('Med');
	const [isPending, setIspending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author }
		setIspending(true);
		fetch('http://10.13.10.17:8000/blogs', {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog)
		}).then(() => {
			console.log('Blog added :)');
			setIspending(false);
			history.push('/');
			// history.go(-1); to go back one step, we can
			// go forward by setting a positive value, it can be 2,3,4... ;
		}
		)
	}
	return (
		<div className="createBlog">
			<h2>Add New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label >Blog title:</label>
				<input type="text" required value={title}
					onChange={(e) => setTitle(e.target.value)} />
				<label >Blog body:</label>
				<textarea name="" id="" cols="30" rows="10"
					value={body} onChange={(e) => setBody(e.target.value)}></textarea>
				<label >Blog author:</label>
				<select name="" id="" value={author}
					onChange={(e) => setauthor(e.target.value)}>
					<option defaultValue={'Med'} value="Med">Med</option>
					<option value="Moha">Moha</option>
					<option value="Wa3mo">Wa3mo</option>
				</select>
				{!isPending && <button >Add blog</button>}
				{isPending && <button disabled>Adding blog...</button>}
				{/* <div>{title}</div>
				<div>{body}</div>
				<div>{author}</div> */}
			</form>
		</div>
	);
}

export default CreateBlog;