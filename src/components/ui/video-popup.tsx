import React, { useEffect, useState } from "react";
import Svg from "./svg";

interface VideoPopupProps {
  popup: string | null; // filename in /static or full URL
  setPopup: (filename: string | null) => void;
}

const VideoPopupComponent: React.FC<VideoPopupProps> = ({ popup, setPopup }) => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    if (popup) {
      // If popup looks like a URL, use directly; else assume it's a static file
      const isExternal = popup.startsWith("http://") || popup.startsWith("https://");
      setVideoSrc(isExternal ? popup : `/${popup}`);
    } else {
      setVideoSrc(null);
    }
  }, [popup]);

  if (!popup) return null;

  return (
    <div className="w-full h-full fixed top-0 left-0 z-[60] flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden">
          {videoSrc && (
            <iframe
              title="demo"
              className="aspect-video w-full"
              src={videoSrc}
              allowFullScreen
            />
          )}
          <button
            onClick={() => setPopup(null)}
            className="absolute top-3 right-3 inline-flex items-center justify-center text-gray-600 hover:text-gray-900 transition"
          >
            <Svg name="theme/close" className="w-9 h-9" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPopupComponent;
