import cn from "classnames";
import { CloseButton } from "./CloseButton";

import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma núvem",
    },
  },
};

export function WidgetForm() {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center p-4 mb-4 shadow-lg rounded-2xl",
        "text-zinc-100 bg-zinc-900 w-[calc(100vw-2rem)] md:w-auto"
      )}
    >
      <header>
        <CloseButton />
        <span className="text-xl leading-6">Deixe seu Feedback</span>
      </header>

      <div className="flex w-full gap-2 py-8">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            className={cn(
              "flex-col py-5 items-center flex-1 w-24 gap-2 border-2 border-transparent rounded-lg",
              "bg-zinc-800 focus:border-brand-500 hover:border-brand-500 focus:outline-none"
            )}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>

      <footer className="text-xs text-neutral-400">
        Feito com 🤍 por{" "}
        <a
          className="underline underline-offset-1"
          href="https://paulospiguel.com"
        >
          Paulo Spiguel
        </a>
      </footer>
    </div>
  );
}
