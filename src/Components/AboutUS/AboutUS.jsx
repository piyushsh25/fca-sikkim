import "./About.css";
export const AboutUS = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">About FCA</div>
      <div className="about-us-image">
        <img src={require("../assets/1.jpg")} alt="About Us" />
      </div>
      <div className="about-us-content-1">
        Federation of Consumers Association of Sikkim was formed in the year
        1997. Since then, FCAS has been the only voluntary consumer organization
        (VCO) in Sikkim. FCAS has been instrumental in promoting consumer rights
        in the state and protecting consumer interests, particularly in
        concretizing the consumer rights and remedies enacted under the Consumer
        Protection Act. <br />
        <br />
        FCAS is a member of the State Consumer Protection Council with
        Registration No. 990/Vol.I/1990 and NGO Darpan Unique ID No.
        SK/2022/0318444.
      </div>
      <div className="about-us-content-2">
        <b>The current office bearers of FCAS are:</b>
        <br />
        <br />
        <h4>
          <ul>
            <li>President: Mr. Suresh Kumar Lama</li>
            <li>Vice Presidents: Mrs. Srijana Kadka & Mr. Kesang Tamang</li>
            <li>General Secretary: Mr. Amartya Raj Gurung</li>
            <li>Treasurer: Mr. Gaurav Kumar</li>
            <li>Chief Coordinator (State): Miss Rinzing Doma Tamang</li>
            <li>Coordinator: Mr. Ashal Chettri</li>
            <li>Publicity Secretary: Mr. Nitesh R. Pradhan</li>
          </ul>
        </h4>
      </div>
    </div>
  );
};
