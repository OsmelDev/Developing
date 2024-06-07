import React from "react";
import styles from "./Home.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaHandSpock } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";
import avatar from "../assets/avatar.jpg";

export const Home = () => {
  return (
    <div name="Home">
      <div className={styles.homeContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.feed}>
            <FaInstagramSquare className={styles.iconsFeed}/>
            <FaFacebookSquare className={styles.iconsFeed}/>
            <FaGithubSquare className={styles.iconsFeed}/>
          </div>
          <div className={styles.homeContent}>
            <h2 className={styles.name}>
              Osmel Prades
              <FaHandSpock className={styles.icon}/>
            </h2>

            <div className={styles.title}>
              <h1>
                <div className={styles.line}></div> 
                <p>Web Developer</p>
              </h1>
            </div>

            <p>
              I'm creative developer based in La Havana, and I'm 
              very passionate and dedicated to my work.
            </p>

            <button className={styles.button}>Say Hello <LiaTelegram/></button>
          </div>
          
        </div>
<div className={styles.img}></div>
        {/* <img src={avatar} alt="" /> */}
      </div>
     
    </div>
  );
};
