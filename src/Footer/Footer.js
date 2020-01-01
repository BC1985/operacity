import React from "react";
import "./Footer.css";
function Footer() {
  const sponsersData = [
    {
      img:
        "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
      name: "placeholder"
    },
    {
      img:
        "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo2.png",
      name: "placeholder"
    },
    {
      img:
        "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png",
      name: "placeholder"
    },
    {
      img:
        "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo4.png",
      name: "placeholder"
    }
  ];
  const sponsors = sponsersData.map((sponsor, index) => {
    return (
      <li key={index}>
        <img src={sponsor.img} alt={sponsor.name} />
      </li>
    );
  });
  return (
    <footer className="footer">
      <ul className="col-1">
        <li>Contact</li>
        <li>Program</li>
        <li>Sponsors</li>
        <li>News</li>
        <li>Gallery</li>
      </ul>
      <ul className="col-2">
        <li>Donate</li>
        <li>Volunteer</li>
        <li>Host</li>
        <li>Join</li>
      </ul>

      <ul className="sponsors">
        <p style={{ marginBlockStart: "0" }}>Sponsors</p>
        {sponsors}
      </ul>
    </footer>
  );
}

export default Footer;
