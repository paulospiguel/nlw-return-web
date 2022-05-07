import { useState } from "react";
import cn from "classnames";
import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

export const ScreenshotButton = ({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleScreenshot = async () => {
    setIsTakingScreenshot(true);
    const widgetContainer = document.querySelector(
      "#widgetContainer"
    ) as Element;

    widgetContainer.classList.add("hidden");

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Image = canvas.toDataURL("image/png");

    widgetContainer.classList.remove("hidden");

    onScreenshotTook(base64Image);
    setIsTakingScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTook(null)}
        className={cn(
          "w-10 h-10 p-1 rounded-md border-transparent",
          "text-zinc-400 flex justify-end items-end",
          "hover:text-zinc-100 transition-colors"
        )}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      //disabled
      type="button"
      onClick={handleScreenshot}
      className={cn(
        "p-2 bg-zinc-800 border-transparent rounded-md",
        "hover:bg-zinc-700 focus:outline-none focus:ring-brand-500",
        "focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900",
        "transition-colors disabled:opacity-50"
      )}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
};
