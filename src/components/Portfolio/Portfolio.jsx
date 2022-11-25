import styles from './Portfolio.module.css';
import Project_1 from '../../images/projects/project_01.jpg';
import Project_2 from '../../images/projects/project_02.jpg';
import Project_3 from '../../images/projects/project_03.jpg';
import Project_4 from '../../images/projects/project_04.jpg';
import Project_5 from '../../images/projects/project_05.jpg';
import Project_6 from '../../images/projects/project_06.jpg';

import video_1 from '../../video/video-webm_01.webm';
import video_01 from '../../video/video-mp4_01.mp4';
import video_2 from '../../video/video-webm_02.webm';
import video_02 from '../../video/animation-mp4_02.mp4';
import video_3 from '../../video/video-webm_03.webm';
import video_03 from '../../video/video-mp4_03.mp4';
import video_4 from '../../video/video-webm_04.webm';
import video_04 from '../../video/bart-mp4_04.mp4';
import video_5 from '../../video/video-webm_05.webm';
import video_05 from '../../video/video-mp4_05.mp4';
import video_6 from '../../video/video-webm_06.webm';
import video_06 from '../../video/video-mp4_06.mp4';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <h1 className={styles.title}>My portfolio</h1>

        <p className={styles.text}>Projects made in programm Blender</p>

        <ul className={styles.portfolioBox}>
          <li className={styles.pictures}>
            <p className={styles.text}>_01</p>
            <img className={styles.picturesImg} src={Project_1} alt="" />
            <span className={styles.overlay}></span>
          </li>

          <li className={styles.pictures}>
            <p className={styles.text}>_02</p>
            <img className={styles.picturesImg} src={Project_2} alt="" />
          </li>

          <li className={styles.pictures}>
            <p className={styles.text}>_03</p>
            <img className={styles.picturesImg} src={Project_3} alt="" />
          </li>

          <li className={styles.pictures}>
            <p className={styles.text}>_04</p>
            <img className={styles.picturesImg} src={Project_4} alt="" />
          </li>

          <li className={styles.pictures}>
            <p className={styles.text}>_05</p>
            <img className={styles.picturesImg} src={Project_5} alt="" />
          </li>

          <li className={styles.pictures}>
            <p className={styles.text}>_06</p>
            <img className={styles.picturesImg} src={Project_6} alt="" />
          </li>

          <li className={styles.pictures}>
            <p className={styles.text}>_07</p>
            <video
              autoPlay
              muted
              loop
              poster=""
              className={styles.video_item}
              controls
            >
              <source src={video_1} type="video/webm" />
              <source src={video_01} type="video/mp4" />
            </video>
          </li>
          <li className={styles.pictures}>
            <p className={styles.text}>_08</p>
            <video
              autoPlay
              muted
              loop
              poster=""
              className={styles.video_item}
              controls
            >
              <source src={video_2} type="video/webm" />
              <source src={video_02} type="video/mp4" />
            </video>
          </li>
          <li className={styles.pictures}>
            <p className={styles.text}>_09</p>
            <video
              autoPlay
              muted
              loop
              poster=""
              className={styles.video_item}
              controls
            >
              <source src={video_3} type="video/webm" />
              <source src={video_03} type="video/mp4" />
            </video>
          </li>
          <li className={styles.pictures}>
            <p className={styles.text}>_10</p>
            <video
              autoPlay
              muted
              loop
              poster=""
              className={styles.video_item}
              controls
            >
              <source src={video_4} type="video/webm" />
              <source src={video_04} type="video/mp4" />
            </video>
          </li>
          <li className={styles.pictures}>
            <p className={styles.text}>_11</p>
            <video
              autoPlay
              muted
              loop
              poster=""
              className={styles.video_item}
              controls
            >
              <source src={video_5} type="video/webm" />
              <source src={video_05} type="video/mp4" />
            </video>
          </li>
          <li className={styles.pictures}>
            <p className={styles.text}>_12</p>
            <video
              autoPlay
              muted
              loop
              poster=""
              className={styles.video_item}
              controls
            >
              <source src={video_6} type="video/webm" />
              <source src={video_06} type="video/mp4" />
            </video>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
