"use client";

import React from "react";
import { Button } from "./ui/button";

export default function SeriousModeButton() {
  const handleClick = async () => {
    // Extend HTMLElement type to include vendor-prefixed fullscreen methods
    const el = document.documentElement as HTMLElement & {
      webkitRequestFullscreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    };

    if (el.requestFullscreen) {
      await el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      await el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      await el.msRequestFullscreen();
    }
  };

  return (
    <Button onClick={handleClick}>
      Serious Mode
    </Button>
  );
}