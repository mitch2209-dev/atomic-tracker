import React, { useState } from "react";
import TipsPanel from "./TipsPanel";
import Suggestions from "./Suggestions";
import "./App.css";

export default function App() {
  const [showTips, setShowTips] = useState(false);
  const [fields, setFields] = useState({ goal: "", identity: "", system: "" });
  const [focus, setFocus] = useState("");
  const [goals, setGoals] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false);

  function saveGoal() {
    if (fields.goal) {
      setGoals([...goals, fields]);
      setFields({ goal: "", identity: "", system: "" });
      setShowDashboard(true);
    }
  }

  if (showDashboard) {
    return (
      <div className="app-container">
        <h2>Deine Ziele</h2>
        <ul>
          {goals.map((g, i) => (
            <li key={i}>
              <strong>{g.goal}</strong><br />
              <span>{g.identity}</span><br />
              <span>{g.system}</span>
            </li>
          ))}
        </ul>
        <button onClick={() => setShowDashboard(false)}>Neues Ziel anlegen</button>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h2>Ziel anlegen</h2>
      <div className="form-group">
        <label>Ziel</label>
        <input
          autoComplete="off"
          placeholder="Dein Ziel..."
          value={fields.goal}
          onChange={e => setFields(f => ({ ...f, goal: e.target.value }))}
          onFocus={() => setFocus("goal")}
        />
        <Suggestions active={focus === "goal"} type="goal" input={fields.goal} />
      </div>
      <div className="form-group">
        <label>Identitäts-Statement</label>
        <input
          autoComplete="off"
          placeholder="Ich bin jemand, der..."
          value={fields.identity}
          onChange={e => setFields(f => ({ ...f, identity: e.target.value }))}
          onFocus={() => setFocus("identity")}
        />
        <Suggestions active={focus === "identity"} type="identity" input={fields.identity} />
      </div>
      <div className="form-group">
        <label>System/Prozesse</label>
        <input
          autoComplete="off"
          placeholder="Tägliches Verhalten..."
          value={fields.system}
          onChange={e => setFields(f => ({ ...f, system: e.target.value }))}
          onFocus={() => setFocus("system")}
        />
        <Suggestions active={focus === "system"} type="system" input={fields.system} />
      </div>
      <button className="tips-btn" onClick={() => setShowTips(true)}>Tipps aus Atomic Habits</button>
      <button style={{marginLeft: 12}} onClick={saveGoal}>Ziel speichern und Übersicht</button>
      {showTips && <TipsPanel onClose={() => setShowTips(false)} />}
    </div>
  );
}
