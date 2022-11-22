import styles from './Portfolio.module.css';
import Project_1 from '../../images/projects/markup-hw-08_1.1.jpg';
import Project_2 from '../../images/projects/icecream-team-project_02.1.jpg';
import Project_3 from '../../images/projects/team-03-pr-film_03.jpg';
import Project_4 from '../../images/projects/pro-test_04.jpg';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <h1 className={styles.title}>Portfolio team projects</h1>

        <ul className={styles.portfolioBox}>
          <li className={styles.pictures}>
            <p className={styles.text}>PRO-TEST</p>
            <img
              className={styles.picturesImg}
              src={Project_4}
              alt="project_pro-test"
            />
            <span className={styles.overlay}></span>
          </li>

          <li className={styles.pictures}>
            <p className={styles.text}>FILMOTEKA</p>
            <img
              className={styles.picturesImg}
              src={Project_3}
              alt="project_filmoteka"
            />
          </li>

          <li className={styles.pictures}>
            <p className={styles.text}>ICECREAM</p>
            <img
              className={styles.picturesImg}
              src={Project_2}
              alt="project_icecream"
            />
          </li>

          <li className={styles.pictures}>
            <p className={styles.text}>
              WEB-STUDIO Own project
              
            </p>
            <img
              className={styles.picturesImg}
              src={Project_1}
              alt="project_web-studio"
            />
          </li>
        </ul>
        <div className={styles.tehnology}> 
          <h2 className={styles.tehnology_text}>Use of technologies on projects.</h2>
          <div className={styles.icon}>

          <div className={styles.iconScale}>
                <img 
                
                src="https://i.pinimg.com/originals/5e/fd/4e/5efd4e04173b52c1c4d1f459679bf7fb.png" 
                alt="figma_logo"  
                width={50} 
                // height={100}
                /> 
              </div>
           
              <div className={styles.iconScale}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" 
                alt="HTML5_logo"  
                width={50} 
                // height={24}
                /> 
              </div>
              <div className={styles.iconScale}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" 
                alt="CSS3_logo"  
                width={50} 
                // height={24}
                /> 
              </div>
              <div className={styles.iconScale}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png" 
                alt="Javascript_logo"  
                width={50} 
                height={50}
                /> 
              </div>
              <div className={styles.iconScale}>
                <img src="https://camo.githubusercontent.com/c38bf4a44750bd9b576a2259a5074dd277d63f0a412b5b1f31f54e516711ef5b/687474703a2f2f736173732d6c616e672e636f6d2f6173736574732f696d672f7374796c6567756964652f7365616c2d636f6c6f722d61656630333534632e706e67" 
                alt="sass_logo"  
                // width={24} 
                // height={24}
                /> 
              </div>
              
              <div className={styles.iconScale}>
                <img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" 
                alt="react_logo"  
                width={100} 
                // height={24}
                /> 
              </div>
            
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
