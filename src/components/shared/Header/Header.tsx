import Link from 'next/link';
import { validateAccessToken } from 'app/utils/auth/validateAccessToken';
import ShoppingCart from '../ShoppingCart';
import dynamic from 'next/dynamic';
import styles from './Header.module.sass';

const noSsrShoppingCart = dynamic(() => import('../ShoppingCart'), {
  ssr: false,
});

export const Header = async () => {
  const customer = await validateAccessToken();

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (
          <p>Hello {customer.firstName} !</p>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <ShoppingCart />
      </div>
    </header>
  );
};
