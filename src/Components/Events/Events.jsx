import { EventsCarousel } from "./EventsCarousel";
import "./Event.css";
export const Events = () => {
  const eventDetails = [
    {
      header1: "Presentation of Certificates to SMIT students",
      header2: "Presentation of Certificates to SMIT students",
      header3: "Presentation of Certificates to SMIT students",
      header4: "Presentation of Certificates to SMIT students",
      header5: "Presentation of Certificates to SMIT students",
      header6: "Presentation of Certificates to SMIT students",
      header7: "Presentation of Certificates to SMIT students",

      description1:
        "Federation of Consumers Association of Sikkim (FCAS) , President, Shri Suresh K. Lama presented Certificate of Appreciation to the two B.Tech (CSE) students of Sikkim Manipal Institute of Technology Mr. Rinchen Tempa Bhutia and Mr. Piyush Poudyal from the hand of Director SMIT Prof (Dr) Gurdaman Lal Sharma for designing and developing official websites of the Federation.FCAS extends thanks to Shri Kiran Gautam , Assistant Professor, Department of Computer Science & Engineering on guiding and supporting FCAS to obtain an official website.",
      description2:
        "Federation of Consumers Association of Sikkim (FCAS) , President, Shri Suresh K. Lama presented Certificate of Appreciation to the two B.Tech (CSE) students of Sikkim Manipal Institute of Technology Mr. Rinchen Tempa Bhutia and Mr. Piyush Poudyal from the hand of Director SMIT Prof (Dr) Gurdaman Lal Sharma for designing and developing official websites of the Federation.FCAS extends thanks to Shri Kiran Gautam , Assistant Professor, Department of Computer Science & Engineering on guiding and supporting FCAS to obtain an official website.",
      description3:
        "Federation of Consumers Association of Sikkim (FCAS) , President, Shri Suresh K. Lama presented Certificate of Appreciation to the two B.Tech (CSE) students of Sikkim Manipal Institute of Technology Mr. Rinchen Tempa Bhutia and Mr. Piyush Poudyal from the hand of Director SMIT Prof (Dr) Gurdaman Lal Sharma for designing and developing official websites of the Federation.FCAS extends thanks to Shri Kiran Gautam , Assistant Professor, Department of Computer Science & Engineering on guiding and supporting FCAS to obtain an official website. ",
      description4:
        "Federation of Consumers Association of Sikkim (FCAS) , President, Shri Suresh K. Lama presented Certificate of Appreciation to the two B.Tech (CSE) students of Sikkim Manipal Institute of Technology Mr. Rinchen Tempa Bhutia and Mr. Piyush Poudyal from the hand of Director SMIT Prof (Dr) Gurdaman Lal Sharma for designing and developing official websites of the Federation.FCAS extends thanks to Shri Kiran Gautam , Assistant Professor, Department of Computer Science & Engineering on guiding and supporting FCAS to obtain an official website. ",

      img1: "https://www.linkpicture.com/q/SAVE_20230327_125258_2.jpg",
      img2: "https://www.linkpicture.com/q/IMG_20230327_131234_2.jpg",
      img3: "https://www.linkpicture.com/q/IMG_20230327_131155_2.jpg",
      img4: "https://www.linkpicture.com/q/IMG_20230327_131301_2.jpg",
    },
    {
      header1: "World Consumer Rights Day 2023",
      header2: "World Consumer Rights Day 2023",
      header3: "World Consumer Rights Day 2023",
      header4: "World Consumer Rights Day 2023",
      header5: "World Consumer Rights Day 2023",
      header6: "World Consumer Rights Day 2023",
      header7: "World Consumer Rights Day 2023",

      description1: "World Consumer Rights Day 2023, Ravangla, South Sikkim",
      description2: "World Consumer Rights Day 2023, Ravangla, South Sikkim",
      description3: "World Consumer Rights Day 2023, Ravangla, South Sikkim ",
      description4: "World Consumer Rights Day 2023, Ravangla, South Sikkim ",
      description5: "World Consumer Rights Day 2023, Ravangla, South Sikkim ",
      description6: "World Consumer Rights Day 2023, Ravangla, South Sikkim ",
      description7: "World Consumer Rights Day 2023, Ravangla, South Sikkim ",

      img1: "https://www.linkpicture.com/q/SAVE_20230316_082233.jpg",
      img2: "https://www.linkpicture.com/q/SAVE_20230316_121549.jpg",
      img3: "https://www.linkpicture.com/q/SAVE_20230316_115303.jpg",
      img4: "https://www.linkpicture.com/q/IMG_20230316_123328.jpg",
      img5: "https://www.linkpicture.com/q/IMG_20230315_204518.jpg",
      img6: "https://www.linkpicture.com/q/SAVE_20230315_204147.jpg",
      img7: "https://www.linkpicture.com/q/IMG_20230316_123411.jpg",
    },
    {
      header1: "Special Consumer Outreach Programme 2023",
      header2: "Special Consumer Outreach Programme 2023",
      header3: "Special Consumer Outreach Programme 2023",
      header4: "Special Consumer Outreach Programme 2023",
      header5: "Special Consumer Outreach Programme 2023",
      header6: "Special Consumer Outreach Programme 2023",

      description1:
        "Special Consumer Outreach Programme organised by Telecom Regulatory Authority of India (TRAI) at Hotel Fern Denzong, Kazi Road, Gangtok on 14th March '2023.",
      description2:
        "On behalf of Federation of Consumers Association of Sikkim, President, Shri Suresh K Lama, Vice President Shri Kesang Tamang attended the programme along with the two volunteers.",
      description3: "Special Consumer Outreach Programme 2023 at Gangtok",
      description4: "Special Consumer Outreach Programme 2023 at Gangtok",
      description5: "Special Consumer Outreach Programme 2023 at Gangtok",

      img1: "https://www.linkpicture.com/q/FB_IMG_1679114033839.jpg",
      img2: "https://www.linkpicture.com/q/IMG_20230314_180050.jpg",
      img3: "https://www.linkpicture.com/q/IMG_20230314_175722.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1679114027732.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1679114047686.jpg",
    },
    {
      header1: "Partnership with C- Quest Capital",
      header2: "Partnership with C- Quest Capital",
      header3: "Partnership with C- Quest Capital",
      header4: "Partnership with C- Quest Capital",

      description1:
        "FCAS has tied up with C - Quest Capital to distribute the free Clean Cook stoves to the rural households of the Sikkim state.Emissions reductions will be achieved through utilizing clean cookstoves that are three times more efficient than open fire cooking, reducing the amount of unsustainably harvested firewood, and switching to sustainable sources of biomass fuels such as crop residue.",
      description2:
        "These investments will significantly improve the health and well-being of rural consumers with key beneficiaries being the women and children who will spend less time carrying firewood over long distances and avoid exposure to toxic air pollution from open fires. The project activities will also directly fund local employment work to conduct post-installation audits and monitoring for the lifetime of these projects.",
      description3:
        "Ground survey for pilot project was already initiated by officials of C-Quest Capital India along with FCAS Executives in the rural areas of Sikkim viz.",
      description4:
        "Khamdong Singtam Constituency of East District, Namthang Rateypani Constituency of South District, Rinchenpong Constituency of Soreng District and Maneybong Dentam Constituency of West District. ",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676457273711.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676457293664.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676457300890.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676441668365.jpg",
    },
    {
      header1: "National Consumer Day 2022 ",
      header2: "National Consumer Day 2022 ",
      header3: "National Consumer Day 2022 ",
      header4: "National Consumer Day 2022 ",
      header5: "National Consumer Day 2022 ",
      header6: "National Consumer Day 2022 ",
      description1: "National Consumer Day 2022 at Yangang, South District",
      description2: "National Consumer Day 2022 at Yangang, South District",
      description3: "National Consumer Day 2022 at Yangang, South District",
      description4: "National Consumer Day 2022 at Yangang, South District",
      description5: "National Consumer Day 2022 at Yangang, South District",
      description6: "National Consumer Day 2022 at Yangang, South District",
      img1: "https://www.linkpicture.com/q/FB_IMG_1676438818822.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676438853404.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676438785538.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676438703801.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676438694985.jpg",
      img6: "https://www.linkpicture.com/q/FB_IMG_1676438795221.jpg",
    },
    {
      header1: "Workshop on Consumer Protection 2022",
      header2: "Workshop on Consumer Protection 2022",
      header3: "Workshop on Consumer Protection 2022",
      header4: "Workshop on Consumer Protection 2022",
      description1:
        "Workshop on Consumer Protection in North Eastern States held at Guwahati, Assam on 2nd.December.2022.",
      description2:
        "[UPCOMING EVENT]   TRAI - Consumer Outreach Programme.Hotel Fern Denzong Kazi Road , Gangtok .Dated: 14th March, 2023.Time: 2 PM",
      description3:
        "Executive Member Miss Chamta Gurung participated on behalf of FCAS which is only Voluntary Consumer Organisation (VCO) in the state of Sikkim.",
      description4: "Workshop on Consumer Protection in North Eastern States",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676457332188.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676457335006.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676457325834.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676457329086_1.jpg",
    },
    {
      header1: "Special Meetings",
      header2: "Special Meetings",
      header3: "Special Meetings",
      header4: "Special Meetings",
      header5: "Special Meetings",

      description1:
        "His Excellency Governor of Sikkim Shri Ganga Prasad meeting with Federation of Consumers Association of Sikkim Executive Committee Members",
      description2:
        "His Excellency Governor of Sikkim Shri Ganga Prasad meeting with Federation of Consumers Association of Sikkim Executive Committee Members",
      description3:
        "His Excellency Governor of Sikkim Shri Ganga Prasad meeting with Federation of Consumers Association of Sikkim Executive Committee Members",
      description4:
        "His Excellency Governor of Sikkim Shri Ganga Prasad meeting with Federation of Consumers Association of Sikkim Executive Committee Members",
      description5:
        "His Excellency Governor of Sikkim Shri Ganga Prasad meeting with Federation of Consumers Association of Sikkim Executive Committee Members",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676441204199.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676441193193.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676441136270.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676441354761.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676441611181.jpg",
    },
    {
      header1: "Consumer Awareness Programme 2022",
      header2: "Consumer Awareness Programme 2022",
      header3: "Consumer Awareness Programme 2022",
      header4: "Consumer Awareness Programme 2022",
      header5: "Consumer Awareness Programme 2022",

      description1:
        "Consumer Awareness Programme 2022 at Mangan, North District",
      description2:
        "Consumer Awareness Programme 2022 at Mangan, North District",
      description3:
        "Consumer Awareness Programme 2022 at Mangan, North District",
      description4:
        "Consumer Awareness Programme 2022 at Mangan, North District",
      description5:
        "Consumer Awareness Programme 2022 at Mangan, North District",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676439022972.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676439031017.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676438990548.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676439061662.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676439114003.jpg",
    },
    {
      header1: "World Consumer Rights Day 2022 ",
      header2: "World Consumer Rights Day 2022 ",
      header3: "World Consumer Rights Day 2022 ",
      header4: "World Consumer Rights Day 2022 ",
      header5: "World Consumer Rights Day 2022 ",
      header6: "World Consumer Rights Day 2022 ",
      description1:
        "World Consumer Rights Day 2022 at Rinchenpong, Soreng District",
      description2:
        "World Consumer Rights Day 2022 at Rinchenpong, Soreng District",
      description3:
        "World Consumer Rights Day 2022 at Rinchenpong, Soreng District",
      description4:
        "World Consumer Rights Day 2022 at Rinchenpong, Soreng District",
      description5:
        "World Consumer Rights Day 2022 at Rinchenpong, Soreng District",
      description6:
        "World Consumer Rights Day 2022 at Rinchenpong, Soreng District",
      img1: "https://www.linkpicture.com/q/FB_IMG_1676439298256.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676439319246.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676439308834.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676439290929.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676439348833.jpg",
      img6: "https://www.linkpicture.com/q/FB_IMG_1676439397266.jpg",
    },
    {
      header1: "World Consumer Rights Day 2021",
      header2: "World Consumer Rights Day 2021",
      header3: "World Consumer Rights Day 2021",
      header4: "World Consumer Rights Day 2021",

      description1: "World Consumer Rights Day 2021, Tadong , Gangtok",
      description2: "World Consumer Rights Day 2021, Tadong , Gangtok",
      description3: "World Consumer Rights Day 2021, Tadong , Gangtok",
      description4: "World Consumer Rights Day 2021, Tadong , Gangtok",

      img1: "https://www.linkpicture.com/q/FB_IMG_1679047376242.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1679047361169.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1679047370907.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1679047366343.jpg",
    },

    {
      header1: "National Consumer Day 2020 ",
      header2: "National Consumer Day 2020 ",
      header3: "National Consumer Day 2020 ",
      header4: "National Consumer Day 2020 ",
      header5: "National Consumer Day 2020 ",

      description1: "National Consumer Day 2020 at Gangtok",
      description2: "National Consumer Day 2020 at Gangtok",
      description3: "National Consumer Day 2020 at Gangtok",
      description4: "National Consumer Day 2020 at Gangtok",
      description5: "National Consumer Day 2020 at Gangtok",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676439533798.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676439552197.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676439544253.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676439495017.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676439572998.jpg",
    },
    {
      header1: "World Consumer Rights Day 2020 ",
      header2: "World Consumer Rights Day 2020 ",
      header3: "World Consumer Rights Day 2020 ",
      header4: "World Consumer Rights Day 2020 ",
      header5: "World Consumer Rights Day 2020 ",
      header6: "World Consumer Rights Day 2020 ",
      description1: "World Consumer Rights Day 2020 at Namchi, South District",
      description2: "World Consumer Rights Day 2020 at Namchi, South District",
      description3: "World Consumer Rights Day 2020 at Namchi, South District",
      description4: "World Consumer Rights Day 2020 at Namchi, South District",
      description5: "World Consumer Rights Day 2020 at Namchi, South District",
      description6: "World Consumer Rights Day 2020 at Namchi, South District",
      img1: "https://www.linkpicture.com/q/FB_IMG_1676439648108.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676439656571.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676439664131.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676439701549.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676439710215.jpg",
      img6: "https://www.linkpicture.com/q/FB_IMG_1676439731747.jpg",
    },

    {
      header1: "National Consumer Day 2019 ",
      header2: "National Consumer Day 2019 ",
      header3: "National Consumer Day 2019 ",
      header4: "National Consumer Day 2019 ",
      header5: "National Consumer Day 2019 ",

      description1: "National Consumer Day 2019 at Namthang, South District",
      description2: "National Consumer Day 2019 at Namthang, South District",
      description3: "National Consumer Day 2019 at Namthang, South District",
      description4: "National Consumer Day 2019 at Namthang, South District",
      description5: "National Consumer Day 2019 at Namthang, South District",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676439839349.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676439811758.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676439797105.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676439804213.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676439903305.jpg",
    },
    {
      header1: "National Consumer Day 2018",
      header2: "National Consumer Day 2018",
      header3: "National Consumer Day 2018",
      header4: "National Consumer Day 2018",
      header5: "National Consumer Day 2018",

      description1: "National Consumer Day 2018 at Jorethang, South District",
      description2: "National Consumer Day 2018 at Jorethang, South District",
      description3: "National Consumer Day 2018 at Jorethang, South District",
      description4: "National Consumer Day 2018 at Jorethang, South District",
      description5: "National Consumer Day 2018 at Jorethang, South District",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676440153813.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676440175437.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676440109470.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676440121223.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676440115438.jpg",
    },
    {
      header1: "National Consumer Day 2017",
      header2: "National Consumer Day 2017",
      header3: "National Consumer Day 2017",
      header4: "National Consumer Day 2017",
      header5: "National Consumer Day 2017",

      description1: "National Consumer Day 2017 at Rangpo",
      description2: "National Consumer Day 2017 at Rangpo",
      description3: "National Consumer Day 2017 at Rangpo",
      description4: "National Consumer Day 2017 at Rangpo",
      description5: "National Consumer Day 2017 at Rangpo",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676439974925.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676439980656.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676440015525.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676440026455.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676440052522.jpg",
    },
    {
      header1: "National Consumer Day 2016",
      header2: "National Consumer Day 2016",
      header3: "National Consumer Day 2016",
      header4: "National Consumer Day 2016",
      header5: "National Consumer Day 2016",

      description1: "National Consumer Day 2016 at Majhitar, Pakyong District",
      description2: "National Consumer Day 2016 at Majhitar, Pakyong District",
      description3: "National Consumer Day 2016 at Majhitar, Pakyong District",
      description4: "National Consumer Day 2016 at Majhitar, Pakyong District",
      description5: "National Consumer Day 2016 at Majhitar, Pakyong District",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676440385119.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676440371426.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676440352921.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676440408459.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676440347167.jpg",
    },
    {
      header1: "National Consumer Day 2015",
      header2: "National Consumer Day 2015",
      header3: "National Consumer Day 2015",
      header4: "National Consumer Day 2015",
      header5: "National Consumer Day 2015",

      description1: "National Consumer Day 2015 at Singtam, East District",
      description2: "National Consumer Day 2015 at Singtam, East District",
      description3: "National Consumer Day 2015 at Singtam, East District",
      description4: "National Consumer Day 2015 at Singtam, East District",
      description5: "National Consumer Day 2015 at Singtam, East District",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676440555981.jpg",
      img2: "https://www.linkpicture.com/q/Screenshot_20230215-112543_Facebook.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676440498497.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676440475534.jpg",
      img5: "https://www.linkpicture.com/q/Screenshot_20230215-112530_Facebook.jpg",
    },

    {
      header1: "Consumer Awareness Programme 2015",
      header2: "Consumer Awareness Programme 2015",
      header3: "Consumer Awareness Programme 2015",
      header4: "Consumer Awareness Programme 2015",
      header5: "Consumer Awareness Programme 2015",

      description1: "Consumer Awareness Programme 2015 at Rhenock, Pakyong",
      description2: "Consumer Awareness Programme 2015 at Rhenock, Pakyong",
      description3: "Consumer Awareness Programme 2015 at Rhenock, Pakyong",
      description4: "Consumer Awareness Programme 2015 at Rhenock, Pakyong",
      description5: "Consumer Awareness Programme 2015 at Rhenock, Pakyong",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676440634119.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676440650967.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676440677271.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676440684228.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676440691169.jpg",
    },
    {
      header1: "World Consumer Rights Day 2014 ",
      header2: "World Consumer Rights Day 2014 ",
      header3: "World Consumer Rights Day 2014 ",
      header4: "World Consumer Rights Day 2014 ",
      header5: "World Consumer Rights Day 2014 ",
      header6: "World Consumer Rights Day 2014 ",
      description1: "World Consumer Rights Day 2014 at Gangtok, East District",
      description2: "World Consumer Rights Day 2014 at Gangtok, East District",
      description3: "World Consumer Rights Day 2014 at Gangtok, East District",
      description4: "World Consumer Rights Day 2014 at Gangtok, East District",
      description5: "World Consumer Rights Day 2014 at Gangtok, East District",
      description6: "World Consumer Rights Day 2014 at Gangtok, East District",
      img1: "https://www.linkpicture.com/q/FB_IMG_1676440829137.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676440810313.jpg ",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676440837736.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676440854786.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676440819146.jpg",
      img6: "https://www.linkpicture.com/q/FB_IMG_1676440792625.jpg",
    },
    {
      header1: "Consumer Awareness Programme 2013",
      header2: "Consumer Awareness Programme 2013",
      header3: "Consumer Awareness Programme 2013",
      header4: "Consumer Awareness Programme 2013",
      header5: "Consumer Awareness Programme 2013",

      description1:
        "Consumer Awareness Programme 2013 at Rangpo Town of Pakyong District",
      description2:
        "Consumer Awareness Programme 2013 at Rangpo Town of Pakyong District",
      description3:
        "Consumer Awareness Programme 2013 at Rangpo Town of Pakyong District",
      description4:
        "Consumer Awareness Programme 2013 at Rangpo Town of Pakyong District",
      description5:
        "Consumer Awareness Programme 2013 at Rangpo Town of Pakyong District",

      img1: "https://www.linkpicture.com/q/FB_IMG_1676440984742.jpg",
      img2: "https://www.linkpicture.com/q/FB_IMG_1676440948366.jpg",
      img3: "https://www.linkpicture.com/q/FB_IMG_1676441015637.jpg",
      img4: "https://www.linkpicture.com/q/FB_IMG_1676440932287.jpg",
      img5: "https://www.linkpicture.com/q/FB_IMG_1676440942294.jpg",
    },
  ];
  return (
    <div className="event-carousel-container">
      {eventDetails.map((event,index) => {
        return (
          <div className="single-event-container" key={index}>
            <EventsCarousel event={event} />
          </div>
        );
      })}
    </div>
  );
};
