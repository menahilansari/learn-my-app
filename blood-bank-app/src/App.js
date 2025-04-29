import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodgroup] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      firstName,
      lastName,
      phone,
      bloodGroup,
    });
  };
  return (
    <div class="App">
      <h1>Blood Bank App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <select
          className="input"
          value={bloodGroup}
          onChange={(e) => setBloodgroup(e.target.value)}
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <div className="btn">
          <button type="submit">Save</button>
        </div>
      </form>
      <div className="div">
        <ul>
          <BloodBankApp />
          <BloodBankApp />
          <BloodBankApp />
        </ul>
      </div>
    </div>
  );
}

export default App;

function BloodBankApp() {
  return (
    <li>
      HTML<span>&times;</span>
    </li>
  );
}
