import './Statistique.css';

function Statistique({ chiffre, libelle }) {
  return (
    <div className="statistique">
      <span className="stat-chiffre">{chiffre}</span>
      <span className="stat-libelle">{libelle}</span>
    </div>
  );
}

export default Statistique;