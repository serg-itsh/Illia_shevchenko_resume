import styles from './About.module.css';
// import team_project from '../../images/projects/team-project.jpg';
import unity from '../../images/about/unity_02.png';
import team_project from '../../images/about/team-projects_02.jpg';
import dut from '../../images/about/dut.jpg';
import ampli from '../../images/about/ampli_01.png';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        {/* <h1>About</h1> */}
        <ul className={styles.about_wrapper}>
          <li className={styles.aboutText}>
            <h2>SUMMARY</h2>
            <div className={styles.about_box}>
              <p className={styles.text}>
                I am a developer at Game Dev looking for an internship in a
                companys.
                I am a quick learner, responsible, ready to learn and
                develop. I work 3D model ingin Blender.
              </p>

             

              <img
                className={styles.text_img}
                src={unity}
                alt="web design"
                // width={250}
              />


            </div>
          </li>

          <li className={styles.aboutText}>
            <h2>PROJECT EXPERIENCE</h2>
            <div className={styles.about_box}>
              <p className={styles.text}>
                EmergencyKi tProject, Link [ C#, Unity ] Vanifestation of a
                lieader ship position in team-project.
              </p>
              
             

              <p  className={styles.ownProject}>Own project, Link Animation criated in Blender.</p>

              <img
                className={styles.text_img}
                src={team_project}
                alt="web design"
                // width={250}
              />
            </div>
          </li>

          <li className={styles.aboutText}>
            <h2>EDUCATION</h2>
            <div className={styles.about_box}>
              <p className={styles.text}>
                State University of Telecommunications Software engineering 2021-
              </p>
              <img
                className={styles.text_img}
                src={dut}
                alt="web design"
                // width={250}
              />
            </div>
          </li>
          <li className={styles.aboutText}>
            <h2>ADDITIONAL EDUCATION</h2>
            <div className={styles.about_box}>
              <p className={styles.text}>
                <strong>IT School Ampli (Kyiv)</strong>
                <br />
                2022 Game Dev

              </p>

              <br />
             
              
              <img
                className={`${styles.text_img} ${styles.text_imgTop}`}
                src={ampli}
                alt="web design"
                // width={250}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
