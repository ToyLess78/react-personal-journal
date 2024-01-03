// import Logo from '../Logo/Logo';
//
// const logos = ['/logo.svg', '/vite.svg'];
import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectUser.jsx';
function Header() {
	// const changeUser = (e) => {
	// 	console.log(e.target.value);
	// };

	return (
		<>
			<img className={styles.logo} src='logo.svg'/>
			{/*<Logo image={logos[0]} />*/}
			<SelectUser />
		</>
	);
}

export default Header;