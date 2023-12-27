import styles from './Logo.css';
import { memo } from 'react';

function Logo({ image }) {
	console.log('Logo');

	return <img className={styles.logo} src={image} alt='Logo' />;
}

export default memo(Logo);