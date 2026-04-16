"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { QuickConnectCard } from "./QuickConnectCard";
import { AnimatedSubmitButton } from "./AnimatedSubmitButton";
import { AutoExpandingTextarea } from "./AutoExpandingTextarea";
import styles from "./contact.module.css";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (_data: FormValues) => {
    setStatus("submitting");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        reset();
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus("idle");
      // Optionally handle errors more gracefully in the UI if needed
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <section className={`${styles.page} ${isFocused ? styles.theaterMode : ""}`}>
      <div className={`${styles.bgText} ${isFocused ? styles.bgTextDimmed : ""}`} aria-hidden="true">
        CONTACT
      </div>

      <div className={`${styles.header} ${isFocused ? styles.dimmed : ""}`}>
        <SectionLabel label="Contact" />
        <h1 className={styles.heading}>Let&apos;s build something remarkable together.</h1>
      </div>

      <div className={styles.columns}>
        <div className={`${styles.left} ${isFocused ? styles.dimmed : ""}`}>
          <QuickConnectCard />
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles.inputGroup}>
            <input
              id="name"
              {...register("name")}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder=" " /* Empty placeholder to trigger :not(:placeholder-shown) logic if doing it via CSS or handle purely via React */
              className={errors.name ? styles.inputError : ""}
            />
            <label htmlFor="name">
              Name
            </label>
            {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
          </div>

          <div className={styles.inputGroup}>
            <input
              id="email"
              type="email"
              {...register("email")}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder=" "
              className={errors.email ? styles.inputError : ""}
            />
            <label htmlFor="email">
              Email
            </label>
            {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
          </div>

          <div className={styles.inputGroup}>
            <AutoExpandingTextarea
              id="message"
              {...register("message")}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder=" "
              className={errors.message ? styles.inputError : ""}
            />
            <label htmlFor="message">
              Message
            </label>
            {errors.message && <span className={styles.errorText}>{errors.message.message}</span>}
          </div>

          <div className={styles.submitWrapper}>
             <AnimatedSubmitButton status={status} />
          </div>
        </form>
      </div>
    </section>
  );
}
