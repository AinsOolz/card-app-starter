import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const [values, setValues] = useState({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (card) => {
    try {
      setBusy(true);
      setError(null);
      await addCard(card);
      navigate('/cards');
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main>
      <h1>Add New Card</h1>
      <CardForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Add Card"
      />
    </main>
  );
}
