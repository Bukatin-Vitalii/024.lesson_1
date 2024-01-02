import '../assets/styles/main.css';
import { useState } from 'react';

function Main () {
	const [count, setCount] = useState(0);

	const plusCounter = () => {
		setCount(count + 1);
	}

	const minusCounter = () => {
		setCount(count - 1);
	}

	const zeroCounter = () => {
		setCount(0);
	}

	return (
		<div className="main">
			<div className="main__container container">
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias tempore quae explicabo voluptatem reprehenderit inventore adipisci quis blanditiis architecto? Fugiat, nam! Possimus nihil facilis minima corporis? Inventore exercitationem laudantium, dolor maxime at tempora accusantium similique fuga sapiente quis ab unde.</p>
				<span className='main__counter'>{count}</span>
				<button className="button" onClick={plusCounter}>+1</button>
				<button className="button" onClick={minusCounter}>-1</button>
				<button className="button" onClick={zeroCounter}>0</button>
			</div>
		</div>
	);
}

export default Main;