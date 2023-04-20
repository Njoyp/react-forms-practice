import { useState } from "react";
import "./App.css";

export default function App() {
  //TODO: Add your state fields here

  const [name, setName] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [tel, setTel] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [complaint, setComplaint] = useState(" ");
  const [contact, setContact] = useState(" ");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleTelChange = (e) => {
    setTel(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
  };
  return (
    <>
      {console.log(name)};{console.log(address)}; {console.log(tel)};{" "}
      {console.log(email)};{console.log(complaint)}; {console.log(contact)};
      {console.log(consent)};
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              onChange={handleNameChange}
              value={name}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              onChange={handleAddressChange}
              value={address}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              onChange={handleTelChange}
              value={tel}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleEmailChange}
              value={email}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleComplaintChange}
              value={complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleContactChange}
                checked={contact === "phone"}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleContactChange}
                checked={contact === "radio"}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleContactChange}
                checked={contact === "post"}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleContactChange}
                checked={contact === "none"}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              onChange={handleConsentChange}
              checked={consent}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
