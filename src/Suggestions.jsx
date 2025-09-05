import React from "react";

const data = {
  goal: [
    "Ich bin jemand, der achtsam lebt",
    "Ich möchte ein Buch schreiben",
    "Mein Ziel ist es, täglich aktiv zu sein",
    "Regelmäßig trainieren",
    "Gesunde Ernährung etablieren"
  ],
  identity: [
    "Ich bin Autor",
    "Ich bin gesund",
    "Ich bin jemand, der strukturiert arbeitet",
    "Ich bin Lernender",
    "Ich bin ein sportlicher Mensch"
  ],
  system: [
    "Täglich meditieren",
    "Jeden Tag schreiben",
    "Trainingsplan befolgen",
    "Dankbarkeit aufschreiben nach dem Abendessen",
    "Meditation nach dem Kaffee"
  ]
};

export default function Suggestions({ active, type, input }) {
  if (!active || !input) return null;
  const filtered = data[type].filter(x => x.toLowerCase().includes(input.toLowerCase()));
  return (
    <ul className="suggestions-list">
      {filtered.map((s, i) => (
        <li key={i} onMouseDown={() => window.document.activeElement.value = s}>{s}</li>
      ))}
    </ul>
  );
}
