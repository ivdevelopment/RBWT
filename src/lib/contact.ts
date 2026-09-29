/**
 * Contact submission service.
 *
 * Swap `submitContact` for a real API call when a backend is ready —
 * this is the single integration point. Keep the same signature.
 */

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export type ContactResult =
  | { ok: true; message: string }
  | { ok: false; error: string };

const API_ENDPOINT = '/api/contact';

/**
 * Sends a contact message.
 *
 * TODO(backend): Replace the simulated request with a real fetch:
 *
 *   const res = await fetch(API_ENDPOINT, {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!res.ok) throw new Error('Request failed');
 */
export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  // Simulate network latency so loading states are exercised.
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return {
    ok: true,
    message: `Thanks ${payload.name.split(' ')[0]} — message received. We'll reply within one business day.`,
  };
}

// Referenced in the backend note above; kept here so the integration point is
// obvious when the simulated submit is replaced with a real request.
void API_ENDPOINT;