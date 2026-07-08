"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Ponte en contacto
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Completa el form con tus datos y enviame un mensaje. Estare respondiendo a la brevedad.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* Fila de Nombre y Apellido */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Nombre</Label>
            <Input id="firstname" placeholder="Federico" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Apellido</Label>
            <Input id="lastname" placeholder="Barraza" type="text" />
          </LabelInputContainer>
        </div>

       
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="dev.fedebar@gmail.com" type="email" />
        </LabelInputContainer>

       
        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Mensaje</Label>
          <Input id="message" placeholder="¿En qué puedo ayudarte?" type="text" />
        </LabelInputContainer>

        {/* Botón de Enviar */}
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
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
      {/* Línea de luz principal en color #D2B48C */}
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#D2B48C] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      
      {/* Segunda línea con desenfoque (blur) para dar el efecto de brillo de fondo */}
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#D2B48C] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
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