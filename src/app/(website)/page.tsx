import WelComeNote from "@/components/CommonComponents/WelComeNote";
import {
  AboutSection,
  AmenitiesSection,
  DayAtJaiAnjaney,
  ExperienceSection,
  Highlights,
  LocationSection,
  RoomsSection,
  Testimonials,
} from "./home-page-components";
import { homePageData } from "./home-page-components/pageData";
import Banner from "@/components/banner/Banner";

export default function Home() {
  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:bg-[#FAF6EC] after:z-[-3]">
      <Banner {...homePageData.hero} />
      <Highlights items={homePageData.highlights} />
      <AboutSection {...homePageData.aboutSection} />
      <DayAtJaiAnjaney {...homePageData.dayAtJaiAnjaney} />
      <ExperienceSection {...homePageData.experiencesSection} />
      <RoomsSection {...homePageData.roomsSection} />
      <AmenitiesSection {...homePageData.amenitiesSection} />
      <LocationSection {...homePageData.locationSection} />
      <Testimonials {...homePageData.testimonials} />
      <WelComeNote {...homePageData.welcomeNote} />
    </main>
  );
}
