import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h1>Hello! I am Serhii, a beginner web developer.</h1>
        <img

src="https://avatars.githubusercontent.com/u/98112335?s=400&u=c40bac0e550924b5ad94177468e107699b5232d2&v=4"
          // src="https://people.com/thmb/IhCtvQQ9cLuZgArpPa4FPvlCfEY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/hgtv-dream-home-1-ce2570fdec9842839217546b36913d48.jpg"
          alt="home"
          // width={300}
        />
        <div className={styles.home_text}>
        <p>
          I attended full-stack developer courses, but I was most interested in
          the frontend.
        </p>

        <p>
          In the past (worked as a mechanic in a paper production shop, held the
          position for 9 years) was involved in control and specific prevention
          of emergency stops of paper industry equipment.
        </p>
        <p>
          Development and modernization of mechanisms of various complexity
          (organization of production processes, development of drawings).
        </p>
        <p>
          Now I am actively developing in development, in particular, I want to
          do frontend. English level (elementary), I am actively improving and
          taking additional courses.
        </p>
        <p>
          
          Most of all, I like working with the visual part, since one of my
          hobbies is creating pictures and working with graphic programs.
        </p>

        <p>
        In order to become a full-fledged team player, I am also considering options as an intern.
        </p>

        
        </div>
        
      </div>
    </div>
  );
};

export default Home;
