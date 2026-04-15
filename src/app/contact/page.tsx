import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out for collaborations, product builds, and consulting.",
  openGraph: {
    title: "Contact | Palash Chaturvedi",
    description: "Reach out for collaborations, product builds, and consulting.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
