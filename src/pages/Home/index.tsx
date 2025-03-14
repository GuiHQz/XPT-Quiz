import { Button } from "../../components/Button";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id="home-page">
      <div className="buttons">
        <h1>XPT - QUIZ</h1>
        <Button className="btn" onClick={() => navigate("/quiz")}>
          Começar Jogo
        </Button>
        <Button className="btn" onClick={() => navigate("/como-jogar")}>
          Regras
        </Button>
        <Button className="btn" onClick={() => navigate("/ranking")}>
          Ranking
        </Button>
        <Button className="btn" onClick={() => navigate("/creditos")}>
          Créditos
        </Button>
      </div>
    </div>
  );
};

export default Home;
