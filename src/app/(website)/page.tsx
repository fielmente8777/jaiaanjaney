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
import SlidingTitle from "@/components/sliders/SlidingTitle";
import { Container } from "@/components/sectionComponants";
import BookingForm from "@/components/Forms/BookingForm";

export default function Home() {
  return (
    <main className="relative after:content-[''] after:inset-0 after:absolute after:z-[-3]">
      <Banner {...homePageData.hero} />
      <div className="lg:hidden bg-linear-to-r from-primary to-secondary py-4">
        <Container>
          <BookingForm />
          <p className="mt-4 text-lg md:text-xl text-white text-center font-light">
            {homePageData.hero.description}
          </p>
        </Container>
      </div>

      <Highlights items={homePageData.highlights} />
      <AboutSection {...homePageData.aboutSection} />
      <DayAtJaiAnjaney {...homePageData.dayAtJaiAnjaney} />
      <ExperienceSection {...homePageData.experiencesSection} />
      <RoomsSection {...homePageData.roomsSection} />
      <SlidingTitle items={homePageData.slidingTitleItems} />
      <AmenitiesSection {...homePageData.amenitiesSection} />
      <LocationSection {...homePageData.locationSection} />
      <Testimonials {...homePageData.testimonials} />
      <WelComeNote {...homePageData.welcomeNote} />
    </main>
  );
}
