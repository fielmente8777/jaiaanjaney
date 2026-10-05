import { HeroType } from "@/@types/homePage";
import { LazyLoadedVideo } from "../Video";
import { Section } from "../sectionComponants";

const Banner: React.FC<HeroType> = ({ title, description, images, video }) => {
  return (
    <Section className="relative w-full aspect-4/3 lg:aspect-16/8">
      {video && <LazyLoadedVideo src={video.src} poster={video.poster} />}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-primary">{title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl font-light">{description}</p>
      </div>
    </Section>
  );
};

export default Banner;
