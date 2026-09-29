import { useState, cloneElement } from 'react';
import type { FormEvent, ReactElement } from 'react';
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send, XCircle } from 'lucide-react';
import { content } from '@/data/content';
import { cn } from '@/lib/utils';
import { submitContact } from '@/lib/contact';
import type { ContactPayload } from '@/lib/contact';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  error?: string;
}

type FieldName = 'name' | 'email' | 'phone' | 'message';

const initialErrors: Record<FieldName, string | undefined> = {
  name: undefined,
  email: undefined,
  phone: undefined,
  message: undefined,
};

/** Contact form with validation + simulated submission (see src/lib/contact.ts). */
export function Contact() {
  const { contact } = content;
  const [values, setValues] = useState<ContactPayload>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState(initialErrors);
  const [state, setState] = useState<FormState>({ status: 'idle' });

  const update = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    // Clear the field error as the user types.
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Record<FieldName, string | undefined> = { ...initialErrors };

    if (!values.name.trim()) next.name = 'Please tell us your name.';
    else if (values.name.trim().length < 2) next.name = 'Name must be at least 2 characters.';

    if (!values.email.trim()) next.email = 'Please add your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) next.email = 'That email address doesn’t look right.';

    const phone = values.phone?.trim() ?? '';
    if (phone && !/^[+\d][\d\s().-]{6,}$/.test(phone)) {
      next.phone = 'That phone number doesn’t look right.';
    }

    if (!values.message.trim()) next.message = 'Please write a short message.';
    else if (values.message.trim().length < 20) next.message = 'Message must be at least 20 characters.';

    setErrors(next);
    return Object.values(next).every((error) => error === undefined);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setState({ status: 'submitting' });
    const result = await submitContact(values);
    if (result.ok) {
      setState({ status: 'success' });
      setValues({ name: '', email: '', phone: '', message: '' });
      setErrors(initialErrors);
    } else {
      setState({ status: 'error', error: result.error });
    }
  };

  return (
    <section id="contact" className="section-pad">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left: heading + contact details */}
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={contact.eyebrow} heading={contact.heading} paragraph={contact.paragraph} align="left" />

            <ul className="mt-10 space-y-5">
              <ContactRow
                icon={Mail}
                label="Email"
                value={contact.info.email}
                href={`mailto:${contact.info.email}`}
              />
              <ContactRow
                icon={Phone}
                label="Phone"
                value={contact.info.phone}
                href={`tel:${contact.info.phone.replace(/[^+\d]/g, '')}`}
              />
              <ContactRow icon={MapPin} label="Studio" value={contact.info.address} />
              <ContactRow icon={Clock} label="Hours" value={contact.info.hours} />
            </ul>
          </div>

          {/* Right: form */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-3xl bg-card p-6 ring-1 ring-line sm:p-10">
              {state.status === 'success' ? (
                <SuccessPanel onReset={() => setState({ status: 'idle' })} />
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      required
                      error={errors.name}
                      htmlFor="contact-name"
                      input={
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Ada Lovelace"
                          value={values.name}
                          aria-invalid={Boolean(errors.name)}
                          onChange={(e) => update('name', e.target.value)}
                        />
                      }
                    />
                    <Field
                      label="Email"
                      required
                      error={errors.email}
                      htmlFor="contact-email"
                      input={
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="ada@company.com"
                          value={values.email}
                          aria-invalid={Boolean(errors.email)}
                          onChange={(e) => update('email', e.target.value)}
                        />
                      }
                    />
                  </div>

                  <Field
                    label="Phone (optional)"
                    error={errors.phone}
                    htmlFor="contact-phone"
                    input={
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 (415) 555-0111"
                        value={values.phone}
                        aria-invalid={Boolean(errors.phone)}
                        onChange={(e) => update('phone', e.target.value)}
                      />
                    }
                  />

                  <Field
                    label="Message"
                    required
                    error={errors.message}
                    htmlFor="contact-message"
                    input={
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project — goals, timeline, budget if you have one…"
                        value={values.message}
                        aria-invalid={Boolean(errors.message)}
                        onChange={(e) => update('message', e.target.value)}
                      />
                    }
                  />

                  {state.status === 'error' && state.error && (
                    <p role="alert" className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      <XCircle className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
                      {state.error}
                    </p>
                  )}

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" size="lg" disabled={state.status === 'submitting'} icon={state.status === 'submitting' ? Loader2 : Send}>
                      {state.status === 'submitting' ? 'Sending…' : 'Send message'}
                    </Button>
                    <p className="text-xs text-muted">We reply within one business day.</p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content_ = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-surface text-ink ring-1 ring-line">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-medium uppercase tracking-wide text-muted">{label}</span>
        <span className="mt-0.5 block text-sm font-medium text-ink">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          className="group flex items-center gap-4 rounded-2xl p-2 -m-2 transition-colors hover:bg-surface/70 focus-visible:outline-2 focus-visible:outline-accent"
        >
          {content_}
        </a>
      </li>
    );
  }
  return <li className="flex items-center gap-4">{content_}</li>;
}

function Field({
  label,
  required,
  error,
  htmlFor,
  input,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  input: ReactElement;
}) {
  const inputClasses = cn(
    'w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30',
    error ? 'border-red-400' : 'border-line hover:border-ink/25',
  );

  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && (
          <span className="text-accent" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      {cloneElement(input, { className: inputClasses })}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-700">
        <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">Message sent</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
        Thanks for reaching out — we’ll get back to you within one business day. In the meantime, feel free to browse
        the rest of the site.
      </p>
      <Button onClick={onReset} variant="secondary" className="mt-8">
        Send another message
      </Button>
    </div>
  );
}