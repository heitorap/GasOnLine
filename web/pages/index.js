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
  const [combustivelType, setCombustivelType] = useState([])
  const postoContext = useContext(PostoContext);
  const Router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    posto.getPosto(nameCity).then((response) => {
      setPostos(response.data);
      postoContext.postos = response.data;
      Router.push('/dashBoard');
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="main">
      <img className={styles.logo} src="/images/gasonline.png"/>
      <form onSubmit={(event) => handleSubmit(event)}>

      <div className={styles.fuel}>
        <div>
          <button type="button" className={styles.gasoline} onClick={(event) => setCombustivelType(1)}>Gasolina</button>
        </div>

        <div>
          <button type="button" className={styles.etanol} onClick={(event) => setCombustivelType(2)}>Etanol</button>
        </div>

        <div>
          <button type="button" className={styles.diesel} onClick={(event) => setCombustivelType(3)}>Diesel</button>
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