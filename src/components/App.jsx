import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function cardEntry(card) {
  return (
    <Card
      key={card.id}
      emoji={card.emoji}
      name={card.name}
      discription={card.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(cardEntry)}</dl>
    </div>
  );
}

export default App;
