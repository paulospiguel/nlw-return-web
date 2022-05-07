import { useState } from "react";
import cn from "classnames";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  const handleFeedbackRestart = () => {
    setFeedbackType(null);
    setFeedbackSuccess(false);
  };

  return (
    <div
      className={cn(
        "relative flex flex-col items-center p-4 mb-4 shadow-lg rounded-2xl",
        "text-zinc-100 bg-zinc-900 w-[calc(100vw-2rem)] md:w-auto"
      )}
    >
      {feedbackSuccess ? (
        <FeedbackSuccessStep onFeedbackRestart={handleFeedbackRestart} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackRestart={handleFeedbackRestart}
              feedbackType={feedbackType}
              onFeedbackSuccess={() => setFeedbackSuccess(true)}
            />
          )}
        </>
      )}

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
