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


  return (
    <div>
      {postos.map((posto) =>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.title}>{posto.name}</span>
            <img className={styles.edit} src="/assets/create.svg" alt="edit"></img>
          </div>
          {/* <div className={s.content}>
            <div>
              <span>{posto.combustivel_type.name}</span>
            </div> */}
          </div>
      )}
    </div>
  )
}
