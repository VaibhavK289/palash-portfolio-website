"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./contact.module.css";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete all fields before submitting.");
      return;
    }

    setError("");
    setForm(initialState);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("chaturvedipalash21@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className={styles.page}>
      <div className={styles.bgText} aria-hidden="true">
        CONTACT
      </div>

      <SectionLabel label="Contact" />
      <h1 className={styles.heading}>Let&apos;s build your next high-impact data and AI product.</h1>

      <div className={styles.columns}>
        <div className={styles.left}>
          <h2>Details</h2>
          <p className={styles.detail}>Email: chaturvedipalash21@gmail.com</p>
          <p className={styles.detail}>Location: Remote</p>
          <p className={styles.detail}>Typical response: within 24 hours</p>
          <button type="button" className={styles.copyButton} onClick={copyEmail}>
            {copied ? "Email copied" : "Copy email"}
          </button>
        </div>

        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          />

          <div aria-live="polite" className={styles.errorRegion}>
            {error}
          </div>

          <Button type="submit" variant="primary">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
