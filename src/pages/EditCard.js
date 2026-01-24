import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
  const { id } = useParams(); // gets :id from /cards/:id/edit
  const navigate = useNavigate();

  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  // Load the existing card so the form is pre-filled
  useEffect(() => {
    const loadCard = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getCards();
        const found = data.find((c) => String(c.id) === String(id));

        if (!found) {
          throw new Error("Card not found.");
        }

        setValues(found);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCard();
  }, [id]);

  // same onChange logic as Add page (controlled inputs)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // submit updates
  const handleSubmit = async (card) => {
    try {
      setBusy(true);
      setError(null);

      // update using the id from URL
      await updateCard(id, card);

      navigate("/cards");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  if (loading) {
    return (
      <main>
        <p>Loading card...</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Edit Card</h1>

      <Link to="/cards">
        <button type="button">Back</button>
      </Link>

      <CardForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Save Changes"
      />
    </main>
  );
}
