import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PostoContext } from '../components/Context/context';
import editCombustivel from '../api/posto';
import styles from '../styles/editPosto.module.css';

export default function editPosto(props) {
  const [edit, setEdit] = useState([]);
  const Router = useRouter();


  const handleSubmit = (event) => {
    event.preventDefault();

    posto.editCombustivel(combustivel_type_id, posto_id).then((response) => {
      
      Router.push('/cardPosto');
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
                  <span style={{color: colors[0]}}>Gasolina</span>
                  <span> - R$</span>
                  <input 
                    className={styles.editGas}
                    type="number"
                    maxLength="10"
                  />
                </div>
              <div className={styles.content}>
                  <span style={{color: colors[1]}}>Etanol</span>
                  <span> - R$</span>
                  <input 
                    className={styles.editEta}
                    type="number"
                    maxLength="10"
                  />
              </div>
              <div className={styles.content}>
                  <span style={{color: colors[2]}}>Diesel</span>
                  <span> - R$</span>
                  <input 
                    className={styles.editDiesel}
                    type="number"
                    maxLength="10"
                  />
              </div>
              <input className={styles.buttonSave} type="submit" value="Salvar"></input>
      </form>
    </div>
  </div>
  )
}