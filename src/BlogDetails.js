import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, isPending, error } = useFetch('http://10.13.10.17:8000/blogs/' + id);
	const history = useHistory();

	const handleDelete = () => {
		fetch('http://10.13.10.17:8000/blogs/' + id,
			{
				method: 'DELETE'
			}).then(() =>
				history.push('/')
			)
	}
	return (
		<div className="blog-details">
			{error && <div>{error}</div>}
			{isPending && <div> Loading...</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleDelete}>Delete</button>
				</article>
			)}
		</div>
	);
}

export default BlogDetails;