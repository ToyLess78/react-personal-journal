import SelectUser from '../SelectUser/SelectUser.jsx';
import Button from '../Button/Button.jsx';
import Logo from '../Logo/Logo.jsx';
import {useState} from 'react';

const logos = ['logo.svg', 'vite.svg'];
function Header() {

	const [logoIndex, setLogoIndex] = useState(0);
	const [secondIndex, setSecondIndex] = useState(0);

	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
		setSecondIndex(i => i + 1);
	};

	return (
		<>
			<Logo image={logos[logoIndex]} />
			{secondIndex}
			<SelectUser />
			<Button onClick={toggleLogo}>Change Logo</Button>
		</>
	);
}

export default Header;