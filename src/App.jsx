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
          {/* <div className="tableWrapper">
            <table>
              <thead id="thead">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Location</th>
                <th>Appointments</th>

              </thead>
              <tbody id="tablebody">
                <tr className="wholeRow">
                  <td>Jayanth</td>
                  <td>B</td>
                  <td>Bangalore</td>
                  <td>
                    <div className="appointment">
                      <ul>
                        <li>
                          10/12/2023 - 10:00 AM <button>Edit</button>{" "}
                          <button>Delete</button>
                        </li>
                        <li>
                          20/12/2023 - 11:00 AM <button>Edit</button>{" "}
                          <button>Delete</button>
                        </li>
                      </ul>
                      <button>Add Appointment</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <ClientList />
        </section>
      </main>
    </>
  );
}

export default App;
