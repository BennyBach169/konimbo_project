import { useState, type JSX } from "react";
import video from "../../assets/matrix.mp4";
import { Fields } from "../../models/Fields";
import { Record } from "../../models/Record";
import airTableService from "../../services/AirTableService";
import "./Form.css";

export function Form(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    let fields: Fields;
    fields = new Fields(name, email, phoneNumber, message);
    let record = new Record(fields);
    airTableService
      .addRecord(record)
      .then(() => {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err.message.data);
      });
  }

  return (
    <div className="Form">
      <div className="form_backround">
        <video 
      src={video} 
      autoPlay 
      loop 
      muted 
      playsInline 
      style={{ width: "100%", height: "100%",objectFit: "cover",opacity:"2%" }}
    />
      </div>
      <div className="form_title">
        <h2>Let's Build Winning Teams</h2>
        <span>Join Us Today</span>
      </div>
      <form className="table_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <textarea
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button type="submit" className="form_button">Register</button>
      </form>
    </div>
  );
}
