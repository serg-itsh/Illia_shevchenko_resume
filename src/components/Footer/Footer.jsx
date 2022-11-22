import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import Sprite from '../../images/social/symbol-defs.svg';
// import SpriteGit from '../../images/social/github.svg';
import social from './social.json';
import Cv from '../../images/cv/cv_illia_shevchenko.pdf';



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.pageFooter__box}>
          <div className={styles.pageFooter__vraper}>
            {/* <h1> Footer</h1> */}

            <div className={styles.footerBox}>
              <div className={styles.pageFooter__logoAddress}>
                <NavLink
                  href=""
                  className={`${styles.logo} ${styles.pageFooter__logo}`}
                  lang="en"
                >
                  ILLIA
                </NavLink>

                <address>
                  <ul className={styles.pageFooter__link}>
                    <li className={styles.pageFooter__item}>
                      <NavLink href="" className={styles.pageFooter__links}>
                      llyashevchenko576@gmail.com

                      </NavLink>
                    </li>
                  </ul>
                </address>
              </div>
              {/* social */}
              <div className={styles.footerSocial}>
                <h3 className={styles.footerSocial__slogan}>join</h3>

                <ul className={`${styles.socialRow} ${styles.flexy}`}>
                  <li className={styles.socialRow__icon}>
                    <a
                      className={`${styles.socialRow__link} ${styles.flexy}`}
                      href={social.linkedin}
                      target="blank"
                    >
                      <svg
                        className={`${styles.socialRow__linkSvg} ${styles.socialRow__linkWhite}`}
                        width={20}
                        height={20}
                      >
                        <use href={`${Sprite}#linkedin`}></use>
                      </svg>
                    </a>
                  </li>

                  {/* <li className={styles.socialRow__icon}>
                    <a
                      className={`${styles.socialRow__link} ${styles.flexy}`}
                      href={social.github}
                      target="blank"
                    >
                      <svg
                        className={`${styles.socialRow__linkSvg} ${styles.socialRow__linkWhite}`}
                        width={24}
                        height={24}
                      >
                        <use href={`${SpriteGit}#icon-github-1`}></use>
                      </svg>
                    </a>
                  </li>

                  <li className={styles.socialRow__icon}>
                    <a
                      className={`${styles.socialRow__link} ${styles.flexy}`}
                      href={social.instagram}
                      target="blank"
                      // rel="noopener noreferrer"
                      // aria-label="Instagram"
                    >
                      <svg
                        className={`${styles.socialRow__linkSvg} ${styles.socialRow__linkWhite}`}
                        width={24}
                        height={24}
                      >
                        <use href={`${Sprite}#instagram`}></use>
                      </svg>
                    </a>
                  </li> */}
                  {/* resume */}

                  <li className={styles.socialRow__icon}>
                    <a
                      className={`${styles.socialRow__link} ${styles.flexy}`}
                      href={Cv}
                      target="blank"
                      download
                    >
                      <strong>CV</strong>
                     
                      
                    </a>
                  </li>

                </ul>
              </div>
            </div>

            <div className={`${styles.copyright} ${styles.flexy}`}>
              Copyright © 2022 ShS. Created by Serhii Shevchenko.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
