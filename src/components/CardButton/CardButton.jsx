import './CardButton.css';
export function CardButton({ children }){
	return (
		<button className='card-button'>{children}</button>
	);
}