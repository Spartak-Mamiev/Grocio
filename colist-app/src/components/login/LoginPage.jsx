import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

import Button from '../ui/button/Button';
import Input from '../ui/input/Input';

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/');
  }

  return (
    <main className={styles.loginPageContainer}>
      <header className={styles.ctaContainer}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to continue sharing lists</p>
      </header>
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit}
      >
        <div className={styles.loginInputContainer}>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            label="Email"
            labelFor="email"
            required
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            label="Password"
            labelFor="password"
            required
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size="large"
          fullWidth
        >
          Sign in
        </Button>
      </form>
      <p className={styles.signupPrompt}>
        Not registered?{' '}
        <Link
          className={styles.signupLink}
          to="/signup"
        >
          Sign up
        </Link>
        .
      </p>
    </main>
  );
}
