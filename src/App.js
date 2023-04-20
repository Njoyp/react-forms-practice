import { useState } from "react";
import "./App.css";

const initialFormData = {
  name: "",
  address: "",
  phone: "",
  email: "",
  complaint: "",
  contact: "",
  consent: false,
};

export default function App() {
  //TODO: Add your state fields here
  const [userData, setUserData] = useState(initialFormData);
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === "checkbox") {
      {
        setUserData({ ...userData, [name]: checked });
      }
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  // const [name, setName] = useState(" ");
  // const [address, setAddress] = useState(" ");
  // const [tel, setTel] = useState(" ");
  // const [email, setEmail] = useState(" ");
  // const [complaint, setComplaint] = useState(" ");
  // const [contact, setContact] = useState(" ");
  // const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleAddressChange = (e) => {
  //   setAddress(e.target.value);
  // };

  // const handleTelChange = (e) => {
  //   setTel(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleComplaintChange = (e) => {
  //   setComplaint(e.target.value);
  // };

  // const handleContactChange = (e) => {
  //   setContact(e.target.value);
  // };

  // const handleConsentChange = (e) => {
  //   setConsent(e.target.checked);
  // };
  return (
    <>
      {/* {console.log(name)};{console.log(address)}; {console.log(tel)};{" "}
      {console.log(email)};{console.log(complaint)}; {console.log(contact)};
      {console.log(consent)}; */}
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={userData.name}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              onChange={handleChange}
              value={userData.address}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              value={userData.phone}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={userData.email}
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
              onChange={handleChange}
              value={userData.complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleChange}
                checked={userData.contact === "phone"}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleChange}
                checked={userData.contact === "radio"}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleChange}
                checked={userData.contact === "post"}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleChange}
                checked={userData.contact === "none"}
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
              onChange={handleChange}
              checked={userData.consent}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
