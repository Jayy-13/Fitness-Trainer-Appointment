import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClientList from "./ClientList";

function App() {
  return (
    <>
      <header className="header">
        <h1>Fitness Trainer Appointment</h1>
      </header>
      <main className="main">
        <section>
          
          <ClientList />
        </section>
      </main>
    </>
  );
}

export default App;
