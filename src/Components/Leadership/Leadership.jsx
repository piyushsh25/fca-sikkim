import "./Leadership.css";
export const LeadershipPage = () => {
  const leaderShip = [
    {
      name: "Late Ganga Devi Rai",
      img: "https://www.linkpicture.com/q/20230215_151742.jpg",
      temure: "2020 - Present",
      title: "President FCA",
      about:
        "She was the Founding President of FCAS, after her retirement as a Principal from Deorali Girls Government Senior Secondary School, Gangtok, she had dedicated her service for the Women Empowerment and for the Consumer Rights awareness activities. ",
    },
    {
      name: "Smt. Jayshree Pradhan , IAS",
      img: "https://www.linkpicture.com/q/received_3498831533708050.jpeg",
      temure: "2020 - Present",
      title: "President FCA",
      about:
        "He is a bureaucrat under Government of Sikkim. He worked as a General Secretary for a long time and initiated massive consumer rights drives till the time he was elevated as a President.",
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
            <div className="leadership-title">
              President FCA|[ 2020 - Present]
            </div>
            He had worked as a Chief Coordinator (State) for FCAS and was
            elected as a President after his 10 years of untiring effort on
            doing consumer awareness campaigns and advocacy across the rural and
            urban regions of the Sikkim state. is the Director of Citizens Urban
            Cooperative Bank Ltd. , Sikkim. He is associated with many social
            organizations of the state. He along with his associate NGOs has
            done numerous humanitarian works and supported many Children's Home
            , Old age homes , underprivileged students, patients etc. He led the
            team and volunteered on reaching the essential commodities to the
            Nepal Earthquake victims in the year 2015 in the banner of
            #SikkimForNepal, were his team had distributed the essential
            commodities and apparels in the mostly damaged 9 villages of 3
            districts of Nepal. Besides he had wholeheartedly contributed and
            volunteered on supporting Landslide victims of Dzongu, North Sikkim,
            Yuksom, West Sikkim, Pathing , Yangang, South Sikkim, Pedong fire
            victims of Kalimpong , West Bengal and many places of needs around
            the state and neighbouring states of India. During the Covid-19
            crisis in Sikkim, individually and along with his Denz'93 (Alumni of
            Sikkim Government College Batch of 1993) supported the needy
            families of the state. He had executed and volunteered several Free
            Health Camps in the state and he is also a frequent blood donor.
            Being a Founder of Sikkim Youth Foundation he had started Kosis (A
            effort to build self reliant society) based on Skill Development
            Training programme , which was successfully conducted at Sawney
            village of Westpendam Constituency and the participants were
            benefited by this social project. Because of Covid-19 pandemic the
            project is in halt, Kosis will be implemented around Sikkim in the
            different villages meant for drop out students and for the
            underpriviledged housewives.He is a Founder of Sikkim Tamang Youth
            Society which mainly focuses on community development. The blog &
            page of STYS promotes the talents, besides creating awareness in the
            history, traditions and cultures of the Tamang community. He is
            actively involved in tourism sector and promoted multiple tourism
            based festivals of Sikkim , besides representing Sikkim in the
            national Tourism festivals in the different states of India . He is
            decorated with numerous felicitations around the state and in the
            neighbouring states by the different organizations. In the year 2022
            he was honoured with Northeast Award in Social Service from the hand
            of Shri Arun Haldar, Vice Chairman, National Commission of Scheduled
            Caste , Government of India and Bollywood Actress Mahima Choudhary
            at Mumbai, Maharastra .`
          </div>
        </div>
      </div>
      <div className="leadership-container leadership-container-2">
          {leaderShip.map((lead, key) => {
            return (
              <div key={key}>
                <div className="profile-image">
                  <img
                    src={lead.img}
                    alt="Leadership FCA Sikkim"
                  />
                </div>
                <div className="about-leadership">
                  <div className="leadership-name">{lead.name}</div>
                  <div className="leadership-title">
                    {lead.title} [{lead.temure}]
                  </div>

                  {lead.about}
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
};
