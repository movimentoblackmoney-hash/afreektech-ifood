
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import "./styles/lp-v2.css";
  // GA4 + Meta Pixel + UTM/gclid/fbclid + consentimento (LGPD) + window.rastreioLead().
  // Portado do pacote LP-v2-joao (rastreio.js) — vanilla JS, sem dependência de framework,
  // só precisa rodar uma vez. Ver comentário no próprio arquivo sobre CAMPOS_BREVO vazio.
  import "./app/lib/rastreio.js";

  createRoot(document.getElementById("root")!).render(<App />);
  