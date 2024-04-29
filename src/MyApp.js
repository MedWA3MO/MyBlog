import { useState } from "react";

export default function MyApp() {
	const [count, setCount] = useState(0);
	function handleClick() {
		setCount(count + 1);
	  }
	return (
	  <div>
		<h1>Counters that update separately</h1>
		<MyButton count={count} rr={handleClick}/>
		<MyButton count={count} rr={handleClick}/>
	  </div>
	);
  }

  function MyButton({count, rr}) {
	return (
	  <button onClick={rr}>
		Clicked {count} times
	  </button>
	);
  }
