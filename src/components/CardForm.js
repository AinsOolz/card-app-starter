export default function CardForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="card_name">Card Name:</label>
        <input
          type="text"
          id="card_name"
          name="card_name"
          value={values.card_name || ''}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor="card_image">Card Image URL:</label>
        <input
          type="url"
          id="card_image"
          name="card_image"
          value={values.card_image || ''}
          onChange={onChange}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={busy}>
        {busy ? 'Adding...' : submitText}
      </button>
    </form>
  );
}
