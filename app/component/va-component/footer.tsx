
import { FaLinkedin, FaFacebookMessenger, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm text-muted-foreground">
      <span className="font-semibold text-foreground">Kay Shamir</span>
      <div className="mt-2 flex justify-center gap-4 text-lg">
        <a
          href="https://www.linkedin.com/in/kay-shamir"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-foreground transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://m.me/kxyshxmxr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Messenger"
          className="hover:text-foreground transition-colors"
        >
          <FaFacebookMessenger />
        </a>
        <a
          href="https://x.com/shamirness"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-foreground transition-colors"
        >
          <FaXTwitter />
        </a>
        <a
          href="mailto:kayshamirbesin04@gmail.com"
          aria-label="Gmail"
          className="hover:text-foreground transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
      <div className="mt-2">
        Crafted with ❤️ by Kay Shamir. © {new Date().getFullYear()} Kay Shamir
      </div>
    </footer>
  );
}
