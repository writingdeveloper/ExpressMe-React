import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.first}>Show Yourself</span>
          <span>with</span>
          <span className={styles.second}>Github</span>
        </h1>
        <Container justifyContent="center">
          <div className={styles.github_input_container}>
            <input
              type="text"
              placeholder="Your Github Account"
              className={styles.github_input}
            />
            <button type="button" className={styles.button}>
              Get Started
            </button>
          </div>
        </Container>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>
                Explore portfolio
              </ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="https://github.com/writingdeveloper/ExpressMe-React"
              type="secondary"
              className={styles.button}
            >
              GitHub
            </ButtonLink>
          </Container>
        </Container>
        <p className={styles.subtitle}>Simple is Best</p>
        <p className={styles.subtitle}>
          Easily create your developer portfolio with just a Github account
        </p>
      </div>
    </Wrapper>
  );
};

export default Hero;
