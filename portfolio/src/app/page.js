import styles from './page.module.css';
import Home from '../components/Home/home'; // Assurez-vous que le chemin est correct
import Project from '../pages/projects'; // Assurez-vous que le chemin est correct
import Comment from '../pages/Comment'; // Assurez-vous que le chemin est correct

export default function Page() {
  return (
    <div className={styles.page}>
      <Home />
    </div>
  );
}
