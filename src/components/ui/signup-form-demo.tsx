"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";


export default function SignupFormDemo() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        firstname,
        lastname,
        email,
        message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    alert("¡Mensaje enviado correctamente!");

    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error(error);
    alert("Ocurrió un error al enviar el mensaje.");
  }
};

const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200" style={{ fontFamily: "Playfair Display, serif" }}>
        Ponte en contacto
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300" style={{ fontFamily: "Jost, sans-serif" }}>
        Completa el form con tus datos y enviame un mensaje. Estare respondiendo a la brevedad.
      </p>

      <form className="my-8" onSubmit={handleSubmit} style={{ fontFamily: "Jost, sans-serif" }}>
        {/* Fila de Nombre y Apellido */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Nombre</Label>
            <Input 
            id="firstname" 
            placeholder="Federico" 
            type="text" 
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="lastname">Apellido</Label>
            <Input 
            id="lastname" 
            placeholder="Barraza" 
            type="text" 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            />
          </LabelInputContainer>

        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input 
          id="email" 
          placeholder="dev.fedebar@gmail.com" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>

       
        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Mensaje</Label>
          <Input 
          id="message" 
          placeholder="¿En qué puedo ayudarte?" 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          />
        </LabelInputContainer>

        {/* Botón de Enviar */}
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-[#D2B48C] to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#D2B48C_inset,0px_-1px_0px_0px_#D2B48C_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Enviar &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};