

/**
 * API Service (Create React App)
 *
 * 1) Create `.env` at project root
 * 2) Set: REACT_APP_API_URL=https://YOUR-BACKEND.onrender.com
 * 3) Restart `npm start`
 */
const API_URL = process.env.REACT_APP_API_URL || "https://c346-card-online-lesson15.onrender.com";

/**
 * TODO: If your backend routes differ, update the paths here.
 * Required endpoints:
 * - GET    /allcards
 * - POST   /addcard
 * - PUT    /updatecard/:id
 * - DELETE /deletecard/:id
 */

export async function getCards() {
  const res = await fetch(`${API_URL}/allcards`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function addCard(card) {
  const res = await fetch(`${API_URL}/addcard`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export function updateCard(id, card) {
  // TODO: implement PUT /updatecard/:id
}

export async function deleteCard(id) {
  const res = await fetch(`${API_URL}/deletecard/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}