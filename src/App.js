import React from "react";
import "./styles.css";
import { CardVideo } from "./componentes/VideoCard";
import { InfosUsuario } from "./componentes/InfoUsuario";


export default function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo titulo="Titulo-1" imagem={"https://picsum.photos/400/400?a=1"} usuario="Miguel"/>
            <CardVideo titulo="Titulo-2" imagem={"https://picsum.photos/400/400?a=2"} usuario="Usuario 2"/>
            <CardVideo titulo="Titulo-3" imagem={"https://picsum.photos/400/400?a=3"} usuario="Usuario 3"/>
            <CardVideo titulo="Titulo-4" imagem={"https://picsum.photos/400/400?a=4"} usuario="Usuario 4"/>
            <CardVideo titulo="Titulo-5" imagem={"https://picsum.photos/400/400?a=5"} usuario="Usuario 5"/>
            <CardVideo titulo="Titulo-6" imagem={"https://picsum.photos/400/400?a=6"} usuario="Usuario 6"/>
            <CardVideo titulo="Titulo-7" imagem={"https://picsum.photos/400/400?a=7"} usuario="Usuario 7"/>
            <CardVideo titulo="Titulo-8" imagem={"https://picsum.photos/400/400?a=8"} usuario="Usuario 8"/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
