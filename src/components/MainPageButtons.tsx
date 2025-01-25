"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CopyIcon, CheckCircleIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const MainPageButtons = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("kohinoornimes@zohomail.com");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text", error);
    }
  };
  return (
    <>
      <Button className="rounded-xl" size={"lg"}>
        About
      </Button>
      <motion.button
        className={cn(
          "rounded-xl px-4 py-2 flex gap-3 items-center text-base hover:bg-slate-200 border",
          copied ? "bg-green-200 text-green-600 scale-105" : "bg-transparent"
        )}
        onClick={handleCopy}
        initial={{ opacity: 1 }}
        animate={{ opacity: copied ? 0.7 : 1, scale: copied ? 1.05 : 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "backInOut" }}
      >
        {copied ? <CheckCircleIcon size={15} /> : <CopyIcon size={15} />}
        {copied ? "Copied!" : "Copy Email"}
      </motion.button>
    </>
  );
};

export default MainPageButtons;
