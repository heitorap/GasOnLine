import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function dashBoard() {
  const Router = useRouter();

  return (
    <div className="main">
        <p>Tela do dashBoard</p>
    </div>
  )
}