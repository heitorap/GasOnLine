import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PostoContext } from '../components/Context/context';
import posto from '../api/posto';
import styles from '../styles/editPosto.module.css';

export default function editPosto() {
  const [edit, setEdit] = useState([]);
  const [combustivelType, setCombustivelType] = useState(1);
  const [precoCombustivel, setPrecoCombustivel] = useState([])
  const Router = useRouter();


  const handleChange = (event) => {
    setCombustivelType(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    posto.editCombustivel(combustivelType, Router.query.posto_id, precoCombustivel).then((response) => {
    Router.push('/');
    }).catch((error) => {
      console.log(error);
    });
  };

  const colors = ['#267c4e', '#4652BF', '#bbb418']

  return (
    <div className="main">
        <header className={styles.header}>
          <img className={styles.logo} src="/images/gasonline.png"/>
        </header>
      <div className={styles.container}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className={styles.header1}>
          <span className={styles.title}>Aurora</span>
        </div>
          <span className={styles.cityArea}>Pompeia</span>
          <div className={styles.contentfirst}>
              <select onChange={handleChange}>
                <option value="1">Gasolina</option>
                <option value="2">Etanol</option>
                <option value="3">Diesel</option>
              </select>
                <input 
                  className={styles.editGas}
                  maxLength="10"
                  onChange={(event) => setPrecoCombustivel(event.target.value)}
                />
                </div>
              <input className={styles.buttonSave} type="submit" value="Salvar"></input>
      </form>
    </div>
  </div>
  )
}