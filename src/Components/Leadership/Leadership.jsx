import "./Leadership.css";
export const LeadershipPage = () => {
  const leaderShip = [
    {
      name: "Shri. Rohit Kumar Pradhan",
      img: "https://www.linkpicture.com/q/received_3426556150993719-1.jpeg",
      temure: "[2020 - 2021]",
      title: "President",
      about:
        "He is a bureaucrat under Government of Sikkim. He worked as a General Secretary from 2013 - 2019 and initiated massive consumer rights drives till the time he was elevated as a President.",
    },
    {
      name: "Smt. Jayshree Pradhan , IAS",
      img: "https://www.linkpicture.com/q/received_3498831533708050.jpeg",
      temure: "[2013 - 2019]",
      title: "President",
      about:
        "She is a retired Secretary of Department of Food & Civil Supplies and Consumer Affairs , Government of Sikkim. She was instrumental in advocating the consumer rights and cause of having consumer group in the state.",
    },
    {
      name: "Late Ganga Devi Rai",
      img: "https://www.linkpicture.com/q/20230215_151742.jpg",
      temure: "[1997 - 2012]",
      title: "President",
      about:
        "She was the Founding President of FCAS, after her retirement as a Principal from Deorali Girls Government Senior Secondary School, Gangtok, she had dedicated her service for the Women Empowerment and for the Consumer Rights awareness activities. ",
    },
  ];
  return (
    <section className="leadership-section">
      <div className="leadership-container">
        <div>
          <div className="profile-image">
            <img
              src="https://www.linkpicture.com/q/received_734302218312247.jpeg"
              alt="Leadership FCA Sikkim"
            />
          </div>
          <div className="about-leadership">
            <div className="leadership-name">Mr. Suresh Kumar Lama</div>
            <div className="leadership-title">President [2022 - Present]</div>
            His remarkable journey encompasses a decade-long commitment as Chief Coordinator for FCAS, culminating in his presidency. Currently the Director of the Citizens Urban Cooperative Bank Ltd. in Sikkim, he extends his influence across diverse social organizations. His philanthropic endeavors, spanning support for earthquake victims in Nepal to aiding local communities in Sikkim and neighboring states, showcase his unwavering dedication.
            Amid the challenges of the COVID-19 crisis, he, alongside Denz'93 group, provided crucial assistance to struggling families in Sikkim. A prominent figure in humanitarian efforts, he actively engages in Free Health Camps and consistently contributes as a blood donor. Founding the Sikkim Youth Foundation, he initiated Kosis, empowering communities through skill development programs, exemplified in the successful implementation in Sawney village. Despite a temporary hiatus due to the pandemic, Kosis aims to reach more villages, aiding drop-out students and underprivileged housewives.
            His commitment extends to community development through the Sikkim Tamang Youth Society, promoting Tamang culture, history, and traditions. His active involvement in Sikkim's tourism sector, including representation in national tourism festivals, underscores his dedication to showcasing the state's vibrancy.
            Recognized for his outstanding contributions, Suresh received the prestigious Northeast Award in Social Service in 2022. The honor, presented by Hon'ble Vice Chairman,  National Commission of Scheduled Caste, Government of India, Shri Arun Haldar and Bollywood Actress Mahima Choudhary in Mumbai, Maharastra, reflects his impactful leadership and selfless service . He stands as an inspiring figure, leaving an indelible mark on Sikkim's social and humanitarian landscape.
          </div>
        </div>
      </div>
      <div className="leadership-container leadership-container-2">
        {leaderShip.map((lead, key) => {
          return (
            <div key={key}>
              <div className="profile-image">
                <img src={lead.img} alt="Leadership FCA Sikkim" />
              </div>
              <div className="about-leadership">
                <div className="leadership-name">{lead.name}</div>
                <div className="leadership-title">{lead.title}</div>
                <div className="leadership-temure">{lead.temure}</div>
                {lead.about}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
