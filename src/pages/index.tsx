import Head from 'next/head'
import Image from 'next/image'
import { Borel, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  const ulRef = useRef<HTMLUListElement | null>(null);

  const handleButtonClick = () => {
    if (ulRef.current) {
      const listItems = ulRef.current.querySelectorAll('li');
      // Modify or style the selected list items here
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add(styles.highlighted);
      }
    }
  };

  useEffect(() => {
    // Add the script for the chat widget here
    const script = document.createElement('script');
    script.src = 'https://retune.so/api/script/beta/chat.js?id=11eec5dd-f304-1780-9354-8d479669480a';
    script.type = 'module';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);
	
  return (
    <>
      <Head>
        <title>MD Waliul Islam Nohan</title>
        <meta name="description" content="MD Waliul Islam Nohan - Portfolio Card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+oFn7jsqfW4M02v42PxTKX1TxIa8309I5RngXuJswb0sz7+"  />


      </Head>


      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>

        </div>

        <div className={styles.center}>
        <div className={styles.terminal}>
            <div className={styles.name}>

                    <Image
                    src="https://i.ibb.co/XXw5GB4/avatar-removebg-preview.png" // Replace with the actual path to your image
                    alt="Description of the image"
                    width={50}
                    height={50}

                    style={{ borderRadius: '50%', border: '3px solid white', display: 'inline-block' }}
                  />  
                  <h3>MD_WALIUL_ISLAM_NOHAN</h3>
            </div>

                

					<span>~/portfolio/  ls </span>
              <div>
              <ul className={styles.styledList} ref={ulRef}>
                <li>
                  <a href="https://dribbble.com/waliulislamnohan">Design_projects</a>
                </li>
                <li>
                  <a href="https://github.com/Waliulislamnohan">Development_projects</a>
                </li>
                <li>
                  <a href="https://devpost.com/waliulnohan">Robotics_project</a>
                </li>
                <li>
                  <a href="https://ibb.co/tXRTFpq">Experience</a>
                </li>
              </ul>


              </div>
              <div className={styles.socialContainer}>
              <a href="https://www.facebook.com/waliulislamnohan/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />
      </a>
      <a href="https://twitter.com/WaliulNohan" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
      </a>
      <a href="https://www.linkedin.com/in/md-waliul-islam-nohan/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
      </a>
               </div>
              
				</div>
        </div>

        <div className={styles.grid}>
     
        </div>
      </main>
    </>
  )
}
