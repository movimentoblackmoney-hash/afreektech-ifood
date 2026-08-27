import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Cidade = { nome: string; uf: string };

// Lista completa dos 5.571 municípios do Brasil (fonte: API do IBGE, localidades/municipios,
// baixada em 2026-08-27). Carregada só sob demanda (import dinâmico) — 190KB não entram no
// bundle principal, só quando o usuário de fato abre o campo de cidade.
let cidadesCache: Cidade[] | null = null;
function loadCidades(): Promise<Cidade[]> {
  if (cidadesCache) return Promise.resolve(cidadesCache);
  return import("../../data/cidades-br.json").then((mod) => {
    cidadesCache = (mod.default ?? mod) as unknown as Cidade[];
    return cidadesCache;
  });
}

function normalize(s: string) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Cap no número de resultados renderizados — sem isso, digitar uma letra comum (ex.: "a")
// ainda bateria centenas de cidades e pesaria o DOM. Com o cap, dá pra digitar mais uma letra
// pra refinar, ou simplesmente rolar dentro do que já apareceu.
const MAX_RESULTS = 100;

export type CidadeComboHandle = {
  /** Verdadeiro só se o valor atual veio de um clique numa opção da lista — digitar um nome
   * que pareça uma cidade (ex.: "sao paul", sem selecionar "São Paulo - SP" na lista) NÃO
   * conta como válido, pra não deixar passar cidade inexistente/typo pro Brevo. */
  isValid: () => boolean;
};

/**
 * Campo de CIDADE com busca — digitar filtra a lista (ou ela pode só ser aberta e rolada), mas
 * só uma seleção de verdade (clique numa opção) deixa o campo válido; digitar sem selecionar
 * mantém o texto visível (pra não travar a digitação) mas marca o valor como inválido até o
 * usuário escolher uma opção da lista — ver `isValid()` no ref, chamado pelo formulário no
 * submit. Mesmo padrão de portal (createPortal pro <body> + outside-click checando panelRef)
 * já corrigido no ComboSelect do Mover — ver InscricaoModal.tsx nesse mesmo bug (clique na
 * opção fechava sem selecionar).
 */
const CidadeCombo = forwardRef<
  CidadeComboHandle,
  {
    value: string;
    onChange: (v: string) => void;
    error?: boolean;
    placeholder?: string;
    className?: string;
  }
>(function CidadeCombo({ value, onChange, error, placeholder = "Sua cidade", className = "" }, forwardedRef) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const [cidades, setCidades] = useState<Cidade[] | null>(null);
  const [pos, setPos] = useState<{ top: number; left: number; width: number } | null>(null);
  // true só logo depois de um clique numa opção da lista — qualquer digitação depois derruba
  // pra false de novo, mesmo que o texto resultante pareça uma cidade válida.
  const [selectedFromList, setSelectedFromList] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(forwardedRef, () => ({ isValid: () => selectedFromList }), [selectedFromList]);

  // Mantém o texto do input em sincronia se o valor for alterado por fora (ex.: reset do form).
  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (ref.current && !ref.current.contains(target)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const updatePos = () => {
      if (!inputRef.current) return;
      const r = inputRef.current.getBoundingClientRect();
      setPos({ top: r.bottom + 6, left: r.left, width: r.width });
    };
    updatePos();
    const closeOnScroll = (e: Event) => {
      if (panelRef.current && e.target instanceof Node && panelRef.current.contains(e.target)) return;
      setOpen(false);
    };
    window.addEventListener("scroll", closeOnScroll, true);
    window.addEventListener("resize", updatePos);
    return () => {
      window.removeEventListener("scroll", closeOnScroll, true);
      window.removeEventListener("resize", updatePos);
    };
  }, [open]);

  useEffect(() => {
    if (open && !cidades) loadCidades().then(setCidades);
  }, [open, cidades]);

  const normQuery = normalize(query.trim());
  const results = !cidades
    ? []
    : normQuery
    ? cidades.filter((c) => normalize(c.nome).includes(normQuery)).slice(0, MAX_RESULTS)
    : cidades.slice(0, MAX_RESULTS);

  function select(c: Cidade) {
    const display = `${c.nome} - ${c.uf}`;
    onChange(display);
    setQuery(display);
    setSelectedFromList(true);
    setOpen(false);
  }

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      <input
        ref={inputRef}
        type="text"
        value={query}
        placeholder={placeholder}
        autoComplete="off"
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange(e.target.value);
          setSelectedFromList(false);
          setOpen(true);
        }}
        className="w-full bg-black rounded-[8px] px-[16px] py-[13px] text-[#e5e7eb] text-[14px] outline-none placeholder:text-[#5b616f] border border-solid focus:border-white/40 transition-colors"
        style={{ borderColor: error ? "#ea1d2c" : "rgba(255,255,255,0.16)" }}
      />
      {open &&
        pos &&
        createPortal(
          <div
            ref={panelRef}
            style={{ position: "fixed", top: pos.top, left: pos.left, width: pos.width }}
            className="z-50 bg-[#0f1923] border border-[rgba(255,255,255,0.12)] rounded-[10px] max-h-[280px] overflow-y-auto shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
            {!cidades ? (
              <div className="px-[16px] py-[12px] text-[13px] text-[#5b616f]">Carregando cidades...</div>
            ) : results.length === 0 ? (
              <div className="px-[16px] py-[12px] text-[13px] text-[#5b616f]">
                Nenhuma cidade encontrada — pode digitar do seu jeito mesmo.
              </div>
            ) : (
              results.map((c) => (
                <button
                  key={`${c.nome}-${c.uf}`}
                  type="button"
                  onClick={() => select(c)}
                  className="w-full text-left px-[16px] py-[10px] text-[14px] text-white hover:bg-[rgba(255,255,255,0.04)] transition-colors border-t border-[rgba(255,255,255,0.06)] first:border-t-0"
                >
                  {c.nome} <span className="text-[#5b616f]">- {c.uf}</span>
                </button>
              ))
            )}
          </div>,
          document.body
        )}
    </div>
  );
});

export default CidadeCombo;
