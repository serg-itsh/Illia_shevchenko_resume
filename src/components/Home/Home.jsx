import styles from './Home.module.css';
import foto from '../../images/foto/foto-03.jpg';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h1>Hello! I am Illia, a beginner game developer.</h1>
        <img
          src={foto}
          // src="https://people.com/thmb/IhCtvQQ9cLuZgArpPa4FPvlCfEY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/hgtv-dream-home-1-ce2570fdec9842839217546b36913d48.jpg"
          alt="home"
          // width={300}
        />
        <div className={styles.home_text}>
          <p>I attended game development courses.</p>

          <p>
            Now I am actively developing in development, in particular i want to
            make a own project.
          </p>

          <p>The level of English (Pre-Intermediate).</p>

          <p>
            I like working with the visual part the most, because one of my
            hobbies is creating picturesin graphics programs.
          </p>

          <p>
            In order to become a full-fledged team player, I am also considering
            options as an intern.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
