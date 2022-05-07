import cn from "classnames";

import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <CloseButton />
        <span className="text-xl leading-6">Deixe seu Feedback</span>
      </header>

      <div className="flex w-full gap-2 py-8">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            className={cn(
              "flex flex-col py-5 items-center flex-1 w-24 gap-2 border-2 border-transparent rounded-lg",
              "bg-zinc-800 focus:border-brand-500 hover:border-brand-500 focus:outline-none"
            )}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
