import WelcomeSection from "../components/homepage/welcomeSection";
import QuoteSection from "../components/homepage/quoteSection";
import AboutSection from "../components/homepage/aboutSection";
import SkillSection from "../components/homepage/skillSection";
import CounterSection from "../components/homepage/counterSection";
import TeamSection from "../components/homepage/teamSection";
import HistorySection from "../components/homepage/historySection";
import MeSection from "../components/homepage/meSection";
import TwitterSection from "../components/homepage/twitterSection";
import ContactSection from "../components/homepage/contactSection";
import SocialNetworkSection from "../components/homepage/socialNetworkSection";
import ServiceSection from "../components/homepage/serviceSection";
import WorkSection from "../components/homepage/workSection";
import ReviewSection from "../components/homepage/reviewSection";
import ClientSection from "../components/homepage/clientSection";

const Home = () => {
  return (
    <main id="main" className="site-main">
      <WelcomeSection />
      <QuoteSection />
      <AboutSection />
      {/* <ServiceSection /> */}
      <ReviewSection />
      <SkillSection />
      <CounterSection />
      {/* <TeamSection /> */}
      <HistorySection />
      <WorkSection />
      <MeSection />
      {/* <ClientSection /> */}
      {/* <TwitterSection /> */}
      <ContactSection />
      {/* <SocialNetworkSection /> */}
    </main>
  )
}

export default Home;
