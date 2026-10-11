import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Interests } from "./components/Interests";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";
import styles from "./Cv.module.scss";

export const Cv = () => (
  <div className={styles.resume}>
    <aside>
      <header>
        <Header />
      </header>

      <article className={styles.info}>
        <Contact />
        <Skills />
        <Interests />
      </article>
    </aside>

    <main>
      <Profile />
      <Experience />
      <Education />
    </main>
  </div>
);
