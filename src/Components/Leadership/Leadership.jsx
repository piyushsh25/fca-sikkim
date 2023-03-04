import "./Leadership.css";
export const LeadershipPage = () => {
  const leaderShip = [
    {
      name: "Shri. Rohit Kumar Pradhan",
      img: "https://www.linkpicture.com/q/received_3426556150993719-1.jpeg",
      temure: "[2020 - 2021]",
      title: "President",
      about:
        "He is a bureaucrat under Government of Sikkim. He worked as a General Secretary for a long time and initiated massive consumer rights drives till the time he was elevated as a President.",
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
            He worked as the Chief Coordinator (State) for FCAS and was later
            elected as the President after 10 years of untiring effort in
            conducting consumer awareness campaigns and advocacy across rural
            and urban regions of Sikkim. He is currently the Director of
            Citizens Urban Cooperative Bank Ltd. in Sikkim and is associated
            with many social organizations in the state. Along with his
            associate NGOs, he has done numerous humanitarian works and
            supported many children's homes, old age homes, underprivileged
            students, patients, etc. He led the team and volunteered to provide
            essential commodities to the Nepal earthquake victims in 2015 under
            the banner of #SikkimForNepal. His team distributed essential
            commodities and apparel in the nine most damaged villages across
            three districts of Nepal. Besides, he wholeheartedly contributed and
            volunteered to support landslide victims of Dzongu, North Sikkim,
            Yuksom, West Sikkim, Pathing, Yangang, South Sikkim, Pedong fire
            victims of Kalimpong, West Bengal, and many other places of need in
            the state and neighboring states of India. During the COVID-19
            crisis in Sikkim, he and his Denz'93 (Alumni of Sikkim Government
            College Batch of 1993) supported needy families of the state. He has
            executed and volunteered in several Free Health Camps in the state
            and is also a frequent blood donor. As the Founder of Sikkim Youth
            Foundation, he started Kosis, an effort to build a self-reliant
            society based on skill development training programs, which were
            successfully conducted in Sawney village of Westpendam Constituency.
            The participants benefitted from this social project. Due to the
            COVID-19 pandemic, the project is currently on hold, but Kosis will
            be implemented in different villages across Sikkim for drop-out
            students and underprivileged housewives. He is also the Founder of
            Sikkim Tamang Youth Society, which mainly focuses on community
            development. The blog and page of STYS promote talents while
            creating awareness of the history, traditions, and cultures of the
            Tamang community. He is actively involved in the tourism sector and
            has promoted multiple tourism-based festivals of Sikkim. He has also
            represented Sikkim in national tourism festivals in different states
            of India. He has been decorated with numerous felicitations around
            the state and neighboring states by different organizations. In the
            year 2022, he was honored with the Northeast Award in Social Service
            from the hand of Shri Arun Haldar, Vice Chairman of the National
            Commission of Scheduled Castes, Government of India, and Bollywood
            Actress Mahima Choudhary in Mumbai, Maharashtra.
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
