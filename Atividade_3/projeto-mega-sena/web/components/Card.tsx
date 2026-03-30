import Ball from "./Ball";
import React from "react";

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "space-around",
  justifyContent: "center",
  padding: "1em",
  width: "50%",
  minHeight: "180px",
  border: "solid 2px",
  borderRadius: "1em",
  margin: "2em",
  fontSize: "1.5em",
  fontWeight: "800",
  color: "black",
};

const ballLine = {
  margin: "1em",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
interface Sorteio {
  concurso: number;
  data_do_sorteio: string;
  bola1: number;
  bola2: number;
  bola3: number;
  bola4: number;
  bola5: number;
  bola6: number;
  ganhadores_6_acertos: number;
  cidade_uf: string;
  rateio_6_acertos: string;
  ganhadores_5_acertos: number;
  rateio_5_acertos: string;
  ganhadores_4_acertos: number;
  rateio_4_acertos: string;
  acumulado_6_acertos: string;
  arrecadacao_total: string;
  estimativa_premio: string;
  acumulado_sorteio_especial_mega_da_virada: string;
  observacao: string | null;
  error?: string;
}
const hoje = new Date();

function capitalizarPrimeira(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const formatarData = (dataISO: string) => {
  const data = new Date(dataISO);
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(data);
};

function Card({ dados }: { dados: Sorteio | null }): React.ReactElement | null {
  if (!dados) return <div style={cardStyle}>Carregando...</div>;
  const numeroConcurso: number = dados.concurso;

  const dataConcurso: string = dados.data_do_sorteio
    ? dados.data_do_sorteio
    : hoje.toDateString();

  if (dados.error) {
    console.log(dados.error);
    return (
      <div style={cardStyle}>
        <span style={{ color: "red" }}>{dados.error}</span>
      </div>
    );
  }
  return (
    <div style={cardStyle}>
      <p>
        MEGA-SENA - Concurso{" "}
        <span style={{ color: "blue" }}>{numeroConcurso}</span>
      </p>
      <div style={ballLine}>
        <Ball numero={dados.bola1} />
        <Ball numero={dados.bola2} />
        <Ball numero={dados.bola3} />
        <Ball numero={dados.bola4} />
        <Ball numero={dados.bola5} />
        <Ball numero={dados.bola6} />
      </div>
      <p style={{ fontWeight: "400", fontSize: "0.75em" }}>
        {capitalizarPrimeira(formatarData(dataConcurso))}
      </p>
    </div>
  );
}

export default Card;
