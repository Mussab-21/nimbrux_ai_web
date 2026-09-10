import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
  showLabel?: boolean;
}

export function TechIcon({ name, className = "w-3.5 h-3.5", showLabel = true }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  const renderSvg = () => {
    switch (normalized) {
      case "python":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Python">
            <path
              d="M11.914 2c-5.068 0-4.75 2.196-4.75 2.196l.006 2.276h4.805v.682H5.21S2 6.786 2 11.908c0 5.123 2.8 4.939 2.8 4.939h1.671v-2.348s-.09-2.8 2.753-2.8h4.726v-.708s.4-4.991-2.036-4.991zm-2.61 1.487a.78.78 0 1 1 0 1.56.78.78 0 0 1 0-1.56z"
              fill="#3776AB"
            />
            <path
              d="M12.086 22c5.068 0 4.75-2.196 4.75-2.196l-.006-2.276H12.025v-.682h6.765S22 17.214 22 12.092c0-5.123-2.8-4.939-2.8-4.939h-1.671v2.348s.09 2.8-2.753 2.8h-4.726v.708s-.4 4.991 2.036 4.991zm2.61-1.487a.78.78 0 1 1 0-1.56.78.78 0 0 1 0 1.56z"
              fill="#FFD43B"
            />
          </svg>
        );

      case "pytorch":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PyTorch">
            <path
              d="M12.7 2.012a.386.386 0 0 0-.498.118l-1.92 2.766a8.878 8.878 0 0 0-4.966 7.64c0 4.887 3.96 8.847 8.847 8.847s8.847-3.96 8.847-8.847c0-3.323-1.83-6.22-4.542-7.727l.794-1.144a.386.386 0 0 0-.118-.538l-6.444-1.115zm.62 3.125l4.316.748c1.97 1.346 3.275 3.613 3.275 6.181 0 4.14-3.355 7.496-7.496 7.496s-7.496-3.356-7.496-7.496c0-2.842 1.583-5.313 3.923-6.586l1.373-1.977a.386.386 0 0 0-.083-.538.386.386 0 0 0-.538.083l-1.373 1.977C6.737 6.445 4.966 9.294 4.966 12.603c0 4.987 4.047 9.034 9.034 9.034 4.987 0 9.034-4.047 9.034-9.034 0-3.21-1.68-6.03-4.22-7.587l.72-1.037a.386.386 0 0 0-.538-.538l-5.676 2.072zm3.1 3.51a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0z"
              fill="#EE4C2C"
            />
          </svg>
        );

      case "streamlit":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Streamlit">
            <path
              d="M17.43 8.35L14.7 13.06a.54.54 0 0 1-.94 0L10.97 8.3c-.22-.38.06-.86.5-.86h5.46c.44 0 .72.48.5.86v.05zm-4.7 8.12l-2.73-4.71a.54.54 0 0 1 .47-.81h5.46c.44 0 .72.48.5.86l-2.73 4.71a.54.54 0 0 1-.97-.05zm-6.27-2.7l4.1-7.1a.54.54 0 0 1 .94 0l4.1 7.1c.22.38-.06.86-.5.86H7c-.44 0-.72-.48-.5-.86h-.04z"
              fill="#FF4B4B"
            />
          </svg>
        );

      case "discord":
      case "discordapi":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Discord">
            <path
              d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
              fill="#5865F2"
            />
          </svg>
        );

      case "figma":
      case "figmaapi":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Figma">
            <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
            <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
            <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
            <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
            <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
          </svg>
        );

      case "supabase":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Supabase">
            <path
              d="M13.435 23.364c-.752.934-2.26.434-2.316-.767l-.485-10.457h9.559c1.074 0 1.688 1.226 1.037 2.08L13.435 23.364z"
              fill="#3ECF8E"
            />
            <path
              d="M10.565.636c.752-.934 2.26-.434 2.316.767l.485 10.457H3.807c-1.074 0-1.688-1.226-1.037-2.08L10.565.636z"
              fill="#249361"
            />
          </svg>
        );

      case "nextjs":
      case "next":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Next.js">
            <circle cx="12" cy="12" r="10" fill="#0D1018" stroke="#ffffff40" strokeWidth="1" />
            <path
              d="M15.5 16.5l-6.5-8.5h-1.5v8h1.5v-5.2l5.5 7.2h1zM15 8h1.5v5.5H15z"
              fill="#ffffff"
            />
          </svg>
        );

      case "typescript":
      case "ts":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TypeScript">
            <rect width="24" height="24" rx="3" fill="#3178C6" />
            <path
              d="M11.5 10.5H7.5V12h1.2v6.5h1.6V12h1.2v-1.5zm6.7 2.8c-.3-.4-.7-.7-1.3-.9-.6-.2-1-.4-1.3-.6-.3-.2-.4-.4-.4-.7 0-.3.1-.5.3-.7.2-.2.6-.3 1-.3.4 0 .7.1 1 .3.3.2.5.4.6.8l1.3-.8c-.3-.5-.6-.9-1.1-1.2-.5-.3-1.1-.4-1.8-.4-.8 0-1.5.2-2 .7-.5.5-.8 1.1-.8 1.8 0 .5.1.9.4 1.3.3.4.7.7 1.3.9.6.2 1.1.4 1.4.6.3.2.4.5.4.8 0 .3-.1.6-.4.8-.3.2-.7.3-1.2.3-.5 0-1-.1-1.4-.4-.4-.3-.7-.7-.9-1.2l-1.3.7c.3.7.8 1.3 1.4 1.7.6.4 1.4.6 2.2.6.9 0 1.7-.2 2.2-.7.6-.5.9-1.1.9-1.9 0-.6-.2-1.1-.5-1.5z"
              fill="#fff"
            />
          </svg>
        );

      case "tailwind":
      case "tailwindcss":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tailwind CSS">
            <path
              d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
              fill="#06B6D4"
            />
          </svg>
        );

      case "openai":
      case "llm":
      case "nlp":
      case "embeddings":
      case "langchain":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AI / NLP">
            <circle cx="12" cy="12" r="9" stroke="#8338EC" strokeWidth="1.5" />
            <path d="M12 6v12M6 12h12M7.75 7.75l8.5 8.5M7.75 16.25l8.5-8.5" stroke="#8338EC" strokeWidth="1" opacity="0.6" />
            <circle cx="12" cy="12" r="3" fill="#8338EC" />
          </svg>
        );

      case "fastapi":
      case "api":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="FastAPI">
            <circle cx="12" cy="12" r="10" fill="#05998B" />
            <path d="M11 6l-4 7h4l-2 5 7-8h-4l3-4h-4z" fill="#fff" />
          </svg>
        );

      default:
        return (
          <span className="w-2 h-2 rounded-full bg-[#FFBE0B]/70" />
        );
    }
  };

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[11px] border border-[#1E2430] bg-[#0D1018] text-[#8A95A3] hover:border-[#FFBE0B]/30 hover:text-white transition-colors">
      {renderSvg()}
      {showLabel && <span>{name}</span>}
    </span>
  );
}
