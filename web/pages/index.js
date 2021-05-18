import React, { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { ErrorToast } from "../components/Toast/Toast";
import styles from '../styles/Home.module.css'

export default function Home() {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main">
      <img className={styles.logo} src="/images/gasonline.png"/>
      <form onSubmit={(event) => handleSubmit(event)}>

      <div className={styles.fuel}>
        <div>
          <button className={styles.gasoline} onClick={() => console.log("alert")}>Gasolina</button>
        </div>

        <div>
          <button className={styles.etanol}>Etanol</button>
        </div>

        <div>
          <button className={styles.diesel}>Diesel</button>
        </div>
      </div>
        
      <div className={styles.searchBy}>Buscar por</div>
        
      <div className={styles.search}>
      <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        <input
              type="text"
              placeholder="Cidade"
              className={styles.searchCity}
              maxLength="40"
        />
      </div>
        <input className={styles.buttonSearch} type="submit" value="Pesquisar"></input>
    </form>
  </div>
  )
}