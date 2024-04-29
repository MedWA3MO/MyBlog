import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
	const arrow = '<-'
	return (
		<div className="not-found">
			<h2>Page Not Found</h2>
			<Link to="/"> {arrow} Go Home</Link>
		</div>
	 );
}

export default NotFound;