import React from "react";
import "./App.css";

const tips = [
  { tip: "Umsetzung konkret planen", desc: "Wann? Wo? Wie?", icon: "📆" },
  { tip: "Ziele mit System verknüpfen", desc: "Fokus auf Prozesse statt Endziel", icon: "🛠" },
  { tip: "Habit Stacking", desc: "Neue Gewohnheit an bestehende anhängen", icon: "➕" },
  { tip: "Ziele flexibel formulieren", desc: "Monatsziele statt Wochenziele", icon: "🎯" },
  { tip: "Mini-Schritte wählen", desc: "2-Minuten-Regel anwenden", icon: "⏱" },
  { tip: "Umgebung gestalten", desc: "Dein Umfeld als Helfer", icon: "🏡" },
];

export default function TipsPanel({ onClose }) {
  return (
    <div className="tips-modal">
      <div className="tips-header">
        <h3>Die wichtigsten Ziele-Tipps aus Atomic Habits</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <div className="tips-content">
        {tips.map((t, i) => (
          <div key={i} className="tip-card">
            <span className="tip-icon">{t.icon}</span>
            <span className="tip-title">{t.tip}</span>
            <span className="tip-desc">{t.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
