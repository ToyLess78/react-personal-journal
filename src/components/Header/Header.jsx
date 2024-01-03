// import Logo from '../Logo/Logo';
//
// const logos = ['/logo.svg', '/vite.svg'];
import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectUser.jsx';
import Button from '../Button/Button.jsx';
import {useState} from 'react';

const logos = ['logo.svg', 'vite.svg'];
function Header() {
	const [logoIndex, setLogoIndex] = useState(0);
	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
	};

	return (
		<>
			<img className={styles.logo} src={logos[logoIndex]}/>
			{/*<Logo image={logos[0]} />*/}
			<SelectUser />
			<Button onClick={toggleLogo}>Change Logo</Button>
		</>
	);
}

export default Header;