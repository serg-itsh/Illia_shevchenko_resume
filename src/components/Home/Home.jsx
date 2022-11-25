import styles from './Home.module.css';
import foto from '../../images/foto/foto-03.jpg';

import videoWebm_fon from '../../video/video-webm-fon.webm';
import videoMp4_fon from '../../video/video-mp4-fon.mp4';


const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.fullScreen}>
        <div className={styles.fullScreen_body}>
          <div className={styles.fullScreen_title}>Hello! I am Illia.</div>
          <div className={styles.fullScreen_text}>
            A beginner game developer and designer.
          </div>
        </div>
        <video
        // controls
          autoPlay
          muted
          loop
          preload="auto"
          className={styles.fullScreen_video}
        >
          <source src={videoWebm_fon} type="video/webm" />
          <source src={videoMp4_fon} type="video/mp4" />
        </video>
      </div>

      <div className={styles.container}>
        {/* <h1 className={styles.title}>Hello! I am Illia.</h1>
        <p className={styles.text}>A beginner game developer and designer.</p> */}
        <img
          src={foto}
          alt="home"
          // width={300}
        />
        <div className={styles.text}>
          <p className={styles.text}>I attended game development courses.</p>

          <p className={styles.text}>
            Now I am actively developing in development, in particular i want to
            make a own project.
          </p>

          <p>The level of English (Pre-Intermediate).</p>

          <p className={styles.text}>
            I like working with the visual part the most, because one of my
            hobbies is creating picturesin graphics programs.
          </p>

          <p className={styles.text}>
            In order to become a full-fledged team player, I am also considering
            options as an intern.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
