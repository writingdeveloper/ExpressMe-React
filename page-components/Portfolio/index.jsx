import styles from './User.module.css';
// import UserHeader from './UserHeader';
import UserPortfolio from './Portfolio';

export const User = ({ user }) => {
  return (
    <div className={styles.root}>
      {/* <UserHeader user={user} /> */}
      <UserPortfolio user={user} />
    </div>
  );
};
