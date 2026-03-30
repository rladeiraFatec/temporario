import { useState, useEffect } from "react";
import Card from "../components/Card";
import "./App.css";

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
}

function App() {
  const [concurso, setConcurso] = useState(""); // o que o usuário digita
  const [dados, setDados] = useState<Sorteio | null>(null); // o que vem da API

  useEffect(() => {
    // Se concurso estiver vazio, acessa a rota raiz
    const url = concurso
      ? `http://localhost:3001/${concurso}`
      : `http://localhost:3001/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDados(data); // salva no estado CORRETO
      })
      .catch((error) => console.error("Erro na requisição:", error));
  }, [concurso]);

  const cardPosition = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputBox = {
    width: "12em",
    margin: "2em",
    marginBottom: "4em",
    fontSize: "0.9em",
  };

  return (
    <>
      <input
        style={inputBox}
        type="number"
        value={concurso}
        min="1"
        onChange={(e) => setConcurso(e.target.value)}
        placeholder="Número do Concurso"
      />
      <div style={cardPosition}>
        <Card dados={dados || "Carregando..."} />
      </div>
    </>
  );
}

export default App;
