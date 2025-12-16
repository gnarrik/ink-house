import styles from './BurgerButton.module.scss'

const BurgerButton = (props: any) => {
  const {openDialog, setOpenDialog} = props

  return (
    <button
      className={styles.burgerButton} onClick={() => setOpenDialog(!openDialog)}
    >
      {!openDialog
        ? <span className={styles.opened}></span>
        : <span className={styles.closed}></span>
      }
    </button>
  )
}

export default BurgerButton