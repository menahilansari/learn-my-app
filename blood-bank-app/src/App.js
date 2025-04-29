import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodgroup] = useState("");
  const [bloodList, setBloodlist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Date.now(),
      name: `${firstName} ${lastName}`,
      phone,
      bloodGroup,
    };

    setBloodlist([...bloodList, newEntry]);
    setFirstname("");
    setLastname("");
    setPhone("");
    setBloodgroup("");
  };

  const handleDelete = (id) => {
    setBloodlist(bloodList.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
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
          placeholder="Phone"
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
          {bloodList.map((item) => (
            <BloodBankApp key={item.id} data={item} onDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function BloodBankApp({ data, onDelete }) {
  return (
    <li>
      {data.name} | {data.phone} | {data.bloodGroup}
      <span
        onClick={() => onDelete(data.id)}
        style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
      >
        &times;
      </span>
    </li>
  );
}

export default App;
