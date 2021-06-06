import posto from '../../api/posto'
import React, { useState, useEffect } from 'react'
import styles from './postContainer.module.css'


export default function cardPosto() {
  const [postos, setPosto] = useState([]);

  const getPosto = () => {
    posto.All().then((response) => {
      setPosto(response.data)
      console.log(response.data)
    }).catch((error) => { throw error })
  }

  useEffect(() => {
    getPosto();
  }, []);

  const colors = ['red', 'green', 'blue']

  const endereco = {
    Bairro: 'Centro',
    Numero: '55',
    Rua: 'Rio Branco'
  }


  return (
    <div>
      {postos.map((posto) =>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.title}>{posto.Posto}</span>
            <img className={styles.edit} src="/assets/create.svg" alt="edit"></img>
          </div>
          <span className={styles.cityArea} >{posto.cidade}</span>
          <div className={styles.content}>
              <span style={{color: colors[0]}}>{posto.Tipo} - {posto.preco}</span>
              <span style={{color: colors[1]}}>{posto.Tipo} - {posto.preco}</span>
              <span style={{color: colors[2]}}>{posto.Tipo} - {posto.preco}</span>
          </div>
          <div className={styles.locationContainer}>
            <span>R:{endereco.Rua} - Nº{endereco.Numero}</span>
            <span>B:{endereco.Bairro}</span>
          </div>
        </div>
      )}
    </div>
  )
}
