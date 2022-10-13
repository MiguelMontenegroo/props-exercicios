import React from "react"
import { InfosUsuario } from "./InfoUsuario";

export function CardVideo(props) {


  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (

    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img className="user-img" src={props.imagem} alt=""/>
      <h4>{props.titulo}</h4>
      <InfosUsuario usuario={props.usuario} />
    </div>



  )
}
