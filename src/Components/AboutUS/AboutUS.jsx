import "./About.css";
export const AboutUS = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">About FCA</div>
      <div className="about-us-image">
        <img src={require("../assets/1.jpg")} alt="About Us" />
      </div>
      <div className="about-us-content-1">
        Federation of Consumers Association of Sikkim is formed in the year
        1997. Since then FCAS is the only Voluntary Consumer Organisation (VCO)
        of Sikkim. FCAS is instrumental on promoting Consumer Rights in the
        state till date, besides protects consumer interests particularly to
        concretise the consumer rights and remedies enacted under the Consumer
        Protection Act . FCAS is the member of State Consumer Protection
        Council. Registration No. 990/Vol.I/1990 NGO Darpan Unique ID No.
        SK/2022/0318444.
      </div>
      <div className="about-us-content-2">
        President Mr. Suresh Kumar Lama Vice President Mrs. Srijana Kadka Mr.
        Kesang Tamang General Secretary Mr. Amartya Raj Gurung Treasure Mr.
        Gaurav Kumar Chief Coordinator (State) Miss Rinzing Doma Tamang
        Coordinator Mr. Ashal Chettri Publicity Secretary Mr. Nitesh R. Pradhan
      </div>
    </div>
  );
};
