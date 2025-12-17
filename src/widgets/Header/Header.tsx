import './Header.scss'
import Logo from "@/shared/ui/Logo";
import Cart from "@/shared/ui/Cart";
import BurgerButton from "@/shared/ui/BurgerButton";
import {useState} from "react";

const Header = () => {

  const headerLinks: string[] = ['Репродукции', 'Новинки', 'О нас']

  const [openDialog, setOpenDialog] = useState<boolean>(false)

  return (
    <header className='header'>
      <div className='logo-container'>
        <Logo className='header-logo' />
      </div>
      <nav className='nav'>
        <dialog
          className='header__overlay-menu-dialog' open={openDialog}
        >
          <ul className='nav__list'>
            {headerLinks.map((link, index) => (
              <li className='nav__item' key={index}>
                <a href="/" className='nav__link-title'>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </dialog>
        <BurgerButton
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
        <Cart className='header-cart' isHidden={openDialog} />
      </nav>


    </header>
  )
}

export default Header