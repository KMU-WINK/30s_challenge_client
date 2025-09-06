import Logo from '@src/assets/Logo.png';
import Logotype from '@src/assets/Logotype.png';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex w-full flex-row items-center justify-between border-b border-neutral-100 bg-white px-5 py-3">
      <Link to="/" className="flex flex-row items-center justify-center gap-2">
        <img src={Logo} alt="App Logo" className="h-11 w-11" />
        <img src={Logotype} alt="App Logo" className="h-5 w-20" />
      </Link>
      <Icon icon="tabler:bell" className="h-6 w-6 text-secondary" />
    </header>
  );
}
