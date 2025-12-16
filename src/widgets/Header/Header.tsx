import './Header.scss'
import Logo from "@/shared/ui/Logo";
import Cart from "@/shared/ui/Cart";

const Header = () => {

  const headerLinks: string[] = ['Репродукции', 'Новинки', 'О нас']

  return (
    <header className='header'>
      <Logo />
      <nav className='nav'>
        <ul className='nav__list'>
          {headerLinks.map((link) => (
            <li className='nav__item'>
              <a href="/" className='nav__link-title'>
                {link}
              </a>
            </li>
          ))}
          <Cart />
        </ul>
      </nav>
    </header>
  )
}

export default Header