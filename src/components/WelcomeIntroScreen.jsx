import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WelcomeIntroScreen({ onComplete }) {
  const videoRef = useRef(null);
  const [fade, setFade] = useState(false);

  const introVideoUrl = "https://res.cloudinary.com/dihdjq2u4/video/upload/v1784740155/logoremover_1784739841824_cu1hlw.mp4";

  const handleFinish = () => {
    if (fade) return;
    setFade(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 400);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25; // Play video at 1.25x speed
      videoRef.current.play().catch(() => {
        // Autoplay safety policy catch
      });
    }

    // Safety fallback timer if video fails to emit ended event
    const timer = setTimeout(() => {
      handleFinish();
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={fade ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden select-none"
    >
      {/* Pure Fullscreen HD Cloudinary Video */}
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src={introVideoUrl}
          autoPlay
          muted
          playsInline
          onEnded={handleFinish}
          onError={() => {
            setTimeout(handleFinish, 1500);
          }}
          className="w-full h-full object-cover sm:object-contain max-w-full max-h-full"
        />
      </div>
    </motion.div>
  );
}
