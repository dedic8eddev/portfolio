import Portfolio1Image from "../../assets/img/portfolio-1.png";
import Portfolio2Image from "../../assets/img/portfolio-2.png";
import Portfolio3Image from "../../assets/img/portfolio-3.png";
import Portfolio4Image from "../../assets/img/portfolio-4.png";
import Portfolio5Image from "../../assets/img/portfolio-5.png";
import Portfolio6Image from "../../assets/img/portfolio-6.png";
import Portfolio7Image from "../../assets/img/portfolio-7.jpg";
import Portfolio8Image from "../../assets/img/portfolio-8.jpg";
import PortfolioCard from "../portfolioCard";
import { useMemo, useState } from "react";

const portfolios = [
  {
    title: 'Softwear',
    category: 'Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
    image: Portfolio1Image,
    link: 'https://wearsoftwear.com/'
  },
  {
    title: 'Capte',
    category: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
    image: Portfolio2Image,
    link: 'https://www.capte.co/',
  },
  {
    title: 'Singleton',
    category: 'Mobile App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
    image: Portfolio3Image,
    link: 'https://www.thesingleton.com',
  },
  {
    title: 'Ignition',
    category: 'Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
    image: Portfolio4Image,
    link: 'https://www.ignitionrm.com/',
  },
  {
    title: 'Autohaus',
    category: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
    image: Portfolio5Image,
    link: 'https://autohaus.co.uk/',
  },
  {
    title: 'Imajing',
    category: 'Mobile App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
    image: Portfolio6Image,
    link: 'https://imajing.eu/',
  }
]

const WorkSection = () => {
  const [tab, setTab] = useState('All');

  const filteredPortfolios = useMemo(() => {
    if (tab === 'All') {
      return portfolios;
    } else {
      return  portfolios.filter((portfolio) => portfolio.category === tab);
    }
  }, [tab])

  return (
    <section className="site-section section-works" id="works">
      <div className="container">
        <h2>RECENT WORKS</h2>
        <p className="section-subtitle"><span>OUR CLIENTS LOVE US! READ WHAT THEY HAVE TO SAY</span></p>

        <div className="portfolio">
          {/* <ul className="portfolio-sorting list-inline">
            <li><a className={`${tab === 'All' ? 'active' : ''}`} onClick={() => setTab('All')}>all</a></li>
            <li><a className={`${tab === 'Web Design' ? 'active' : ''}`} onClick={() => setTab('Web Design')}>Web Design</a></li>
            <li><a className={`${tab === 'Web Development' ? 'active' : ''}`} onClick={() => setTab('Web Development')}>Web Development</a></li>
            <li><a className={`${tab === 'Mobile App' ? 'active' : ''}`}  onClick={() => setTab('Mobile App')}>Mobile apps</a></li>
          </ul> */}

          <div id="grid">
            {filteredPortfolios.map((portfolio, index) => (
              <PortfolioCard
                key={index}
                title={portfolio.title}
                description={portfolio.description}
                category={portfolio.category}
                image={portfolio.image}
                link={portfolio.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection;
