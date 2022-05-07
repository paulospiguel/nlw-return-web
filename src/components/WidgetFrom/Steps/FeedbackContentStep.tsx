import cn from "classnames";
import { FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

import { feedbackTypes } from "..";
import { ArrowLeft } from "phosphor-react";
import { ScreenshotButton } from "../ScreenshotButton";
import { FormEvent, useState } from "react";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
  onFeedbackSuccess: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestart,
  onFeedbackSuccess,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackComment, setFeedbackComment] = useState<string | null>("");

  const handleSubmitFeedback = (event: FormEvent) => {
    event.preventDefault();
    console.log("feedbackComment", feedbackComment);
    console.log("screenshot", screenshot);
    console.log("feedbackType", feedbackType);

    onFeedbackSuccess();
  };

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackRestart}
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100 "
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="flex items-center gap-2 text-xl leading-6">
          <img
            src={feedbackTypes[feedbackType].image.source}
            alt={feedbackTypes[feedbackType].image.alt}
            className="w-6 h-6"
          />
          {feedbackTypes[feedbackType].title}
        </span>
        <CloseButton />
      </header>

      <form className="w-full my-4" onSubmit={handleSubmitFeedback}>
        <textarea
          onChange={(event) => setFeedbackComment(event.target.value)}
          className={cn(
            "min-w-[304px] w-full min-h-[112px]",
            "rounded-md resize-none",
            "border-zinc-600 bg-transparent placeholder:text-zinc-500 placeholder:italic text-zinc-100",
            "focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none",
            "scrollbar scrollbar-track-transparent scrollbar-thumb-trin scrollbar-thumb-zinc-700"
          )}
          placeholder="Conte aqui os detalhes do seu feedback..."
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            disabled={!feedbackComment}
            type="submit"
            className={cn(
              "p-2 border-transparent rounded-md text-sm",
              "flex-1 flex justify-center items-center bg-brand-500",
              "hover:bg-brand-300 focus:outline-none focus:ring-brand-500",
              "focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900",
              "transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            )}
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
