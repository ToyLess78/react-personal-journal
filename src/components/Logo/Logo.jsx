import styles from './Logo.module.css';
// import { memo } from 'react';

export default function Logo({ image }) {
	console.log('Logo');

	return <img className={styles.logo} src={image} alt='Logo' />;
}

// export default memo(Logo);