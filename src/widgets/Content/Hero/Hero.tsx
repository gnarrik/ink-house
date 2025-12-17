import {Button} from '@mui/material';
import birdImage from '@/shared/assets/images/Hero/bird.png'
import styles from './Hero.module.scss'

const Hero = () => {

  // const buttonStyles = {
  //   width: '227px',
  //   height: '65px',
  //   border: '1px solid var(--color-green-3)',
  //   borderRadius: '0',
  //   marginTop: 'fluid(60, 10)',
  //   color: 'var(--color-green-3)',
  //   fontSize: '20px',
  //   fontWeight: 'medium',
  //   textTransform: 'none',
  //   fontFamily: 'Raleway',
  //
  //   '&:hover': {
  //     backgroundColor: 'var(--color-green-3)',
  //     color: 'var(--color-light)',
  //   }
  // }

  return (
    <section
      className={styles.hero}
    >
      <img
        className={styles.heroImage}
        src={birdImage}
        alt="bird"
        width="540"
        height="621"
        loading="lazy"
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroText}>
          Реплики картин от <span className={styles.heroTitle}>Ink. House</span>
        </h1>
        <p className={styles.heroTextInner}>
          Высокое качество отрисовки на плотной бумаге или льняном холсте.
          Редкие произведения, доступные цены.
        </p>
        <Button
          variant='outlined'
          className={styles.heroButton}
        >
          Продукция
        </Button>
      </div>

    </section>
  )
}

export default Hero