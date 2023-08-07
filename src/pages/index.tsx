import Head from 'next/head'
import Image from 'next/image'
import { Borel, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleKeyDown = (event:any) => {
    if (event.key === 'ArrowUp') {
      // Handle moving the selection up
      event.preventDefault(); // Prevent default behavior
    } else if (event.key === 'ArrowDown') {
      // Handle moving the selection down
      event.preventDefault(); // Prevent default behavior
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <>
      <Head>
        <title>MD Waliul Islam Nohan</title>
        <meta name="description" content="MD Waliul Islam Nohan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>

          <div>

          </div>
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
					<ul className={styles.styledList} >
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
							<a href="https://ibb.co/tLbkRbc">Experience</a>
						</li>
						</ul>
				</div>
        </div>

        <div className={styles.grid}>
     
        </div>
      </main>
    </>
  )
}
