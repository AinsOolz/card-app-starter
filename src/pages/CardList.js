import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {fetchCards();}, []);

  const fetchCards = async () => {
    try {
      setLoading(true);
      const data = await getCards();
      setCards(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (card) => {
    try {
      setBusy(true);
      await deleteCard(card.id);
      setCards(cards.filter(c => c.id !== card.id));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <main><p>Loading cards...</p></main>;
  if (error) return <main><p>Error: {error}</p></main>;

  return (
    <main>
      <h1>Card List</h1>
      <div className="card-grid">
        {cards.map(card => (
          <Card key={card.id} card={card} onDelete={handleDelete} busy={busy} />
        ))}
      </div>
    </main>
  );
}
