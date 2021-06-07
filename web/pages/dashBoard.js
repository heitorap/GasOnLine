import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from '../styles/DashBoard.module.css';
import CardPosto from '../components/cardPosto/cardPosto';

export default function dashBoard() {
  const Router = useRouter();

  return (
    <div className="main">
        <header className={styles.header}>
          <img className={styles.logo} src="/images/gasonline.png"/>
          <button className={styles.button} onClick={() => Router.push('/')}>Voltar</button>
        </header>
        <div className={styles.posto}>Postos encontrados:</div>
        <CardPosto/>
    </div>
  )
}