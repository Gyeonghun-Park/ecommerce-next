import s from './Usernav.module.scss';
import Link from 'next/link';
import { Bag as Cart, Heart } from '@components/icons';
import { useUI } from '@components/ui/context';

function Usernav() {
  const { openSidebar } = useUI();

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={openSidebar} />
        </li>
        <li className={s.item}>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Usernav;
