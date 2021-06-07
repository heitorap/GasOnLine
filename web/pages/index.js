import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PostoContext } from '../components/Context/context';
import styles from '../styles/Home.module.css';
import posto from '../api/posto';

export default function Home(props) {
  const [postos, setPostos] = useState(false);
  const [nameCity, setNameCity] = useState([]);
  const postoContext = useContext(PostoContext);
  const Router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    posto.getPosto(nameCity).then((response) => {
      setPostos(response.data);
      postoContext.postos = response.data;
      console.log(postoContext);

      Router.push('/dashBoard');
    }).catch((error) => {
      ErrorToast('Cidade não encontrada.');
      console.log(error);
    });
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
              onChange={(event) => setNameCity(event.target.value)}
        />
      </div>
        <input className={styles.buttonSearch} type="submit" value="Pesquisar"></input>
    </form>
  </div>
  )
}