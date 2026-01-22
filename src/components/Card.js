import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy }) {
  return (
    <div className="card">
      <img src={card.card_image} alt={card.card_name} />
      <h3>{card.card_name}</h3>
      <p>ID: {card.id}</p>
      <div className="card-actions">
        <Link to={`/cards/${card.id}/edit`}>Edit</Link>
        <button onClick={() => onDelete(card)} disabled={busy}>
          {busy ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
}
