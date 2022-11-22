import styles from './About.module.css';

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
                I am a Front-End developer looking for a full-time position in a
                company that's aimed at making both everyday life and business
                easier, more productive and user-friendly. I have sound
                knowledge of HTML, CSS, JavaScript, and React. I am a fast
                learner, responsible, and ready for challenging tasks .
              </p>
              <img
              className={styles.text_img}
                src="https://techupgradenow.com/wp-content/uploads/2022/01/1-2.jpg"
                alt="web design"
                // width={250}
              />
            </div>
          </li>
          <li className={styles.aboutText}>
            <h2>WORK EXPERIENCE</h2>
            <div className={styles.about_box}>
              <p className={styles.text}>
                <strong>Mechanic</strong> <br />
                Cardboard and paper factory "Papir-Mal" | 2013-2022 Task
                coordination planning and final quality control of completed
                works. Development of drawings and design of machine parts.
                Installation of a cardboard machine. Modernization of equipment.
              </p>
              <img
              className={styles.text_img}
                src="https://www.airex-industries.com/images/applications/paper_banner.webp"
                alt="web design"
                // width={250}
              />
            </div>
          </li>
          <li className={styles.aboutText}>
            <h2>EDUCATION</h2>
            <div className={styles.about_box}>
              <p className={styles.text}>
                National Technical Univer sity of Ukraine "Kyiv Polytechnic
                Institute" 2006 - 2012 Mechanical engineer, specialty
                "Technology of machine-building"
              </p>
              <img
              className={styles.text_img}
                src="https://liveandstudy.eu/wp-content/uploads/2020/08/2Q2A0123-1024x683.jpg"
                alt="web design"
                // width={250}
              />
            </div>
          </li>
          <li className={styles.aboutText}>
            <h2>ADDITIONAL EDUCATION</h2>
            <div className={styles.about_box}>
              <p className={styles.text}>
                <strong>IT School GoIT (Kyiv)</strong>
                <br />
                2022 Full Stack Developer
              </p>
              <p className={styles.text}>
                <strong>IT School Prometheus (Lviv)</strong>
                <br />
                2021 Bas i c Software Tes ting
              </p>
              <img
              className={styles.text_img}
                src="https://i0.wp.com/techno-senior.com/wp-content/uploads/2022/10/GoIT-Poland.jpg"
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
