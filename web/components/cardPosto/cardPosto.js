import posto from '../../api/posto';
import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from "next/router";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from './postoContainer.module.css';
import { PostoContext } from '../Context/context';

export default function CardPosto() {
  const [postos, setPosto] = useState([]);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false)
  const postoContext = useContext(PostoContext);
  const Router = useRouter();


  useEffect(() => {
    if (postoContext.postos){
      setPosto(postoContext.postos);
    }
  }, []);

  const colors = ['#267c4e', '#4652BF', '#bbb418']

  return (
    <div>
      {postos.map((posto) =>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.title}>{posto.posto}</span>
            <FontAwesomeIcon className={styles.icon} icon={faEdit} onClick={() =>         
            Router.push({
              pathname: '/editPosto',
              query: { posto_id: posto.id_posto, cidade_id: posto.id_cidade },
            })}/>
          </div>
          <span className={styles.cityArea}>{posto.cidade}</span>
          <div className={styles.content}>
              <span style={{color: colors[0]}}>Gasolina</span>
              <span> - R$ {posto.gasolina}</span>
            </div>
          <div className={styles.content}>
              <span style={{color: colors[1]}}>Etanol</span>
              <span> - R$ {posto.etanol}</span>
          </div>
          <div className={styles.content}>
              <span style={{color: colors[2]}}>Diesel</span>
              <span> - R$ {posto.diesel}</span>
          </div>
        </div>
      )}
    </div>
  )
}