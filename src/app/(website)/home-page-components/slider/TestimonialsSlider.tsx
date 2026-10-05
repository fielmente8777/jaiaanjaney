"use client";
import { TestimonialsSectionType } from "@/@types/homePage";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";

const TestimonialsSlider: React.FC<{
  items: TestimonialsSectionType["items"];
}> = ({ items }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        slidesPerView={1.2}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 2.3,
          },
        }}
        data={items}
        renderSlide={(item) => (
          <TestimonialSliderCard review={item.review} author={item.author} />
        )}
      />
    </div>
  );
};

export default TestimonialsSlider;

export const TestimonialSliderCard = ({
  review,
  author,
}: {
  review: string;
  author: string;
}) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-1">
        <Foo />
        <Foo />
      </div>
      <p className="text-light">{review}</p>
      <p className="text-light font-light flex items-center gap-2">
        <span className="text-secondary text-xl">★★★★★</span>
        {author}
      </p>
    </div>
  );
};

export const Foo = () => (
  <svg
    width={8}
    height={17}
    viewBox="0 0 8 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.39567 0.729004C1.95364 0.729004 1.52972 0.904599 1.21716 1.21716C0.904599 1.52972 0.729004 1.95364 0.729004 2.39567V7.39567C0.729004 7.8377 0.904599 8.26162 1.21716 8.57418C1.52972 8.88674 1.95364 9.06234 2.39567 9.06234C2.61668 9.06234 2.82865 9.15013 2.98493 9.30641C3.14121 9.4627 3.229 9.67466 3.229 9.89567V10.729C3.229 11.171 3.05341 11.595 2.74085 11.9075C2.42829 12.2201 2.00436 12.3957 1.56234 12.3957C1.34132 12.3957 1.12936 12.4835 0.973082 12.6397C0.816801 12.796 0.729004 13.008 0.729004 13.229V14.8957C0.729004 15.1167 0.816801 15.3286 0.973082 15.4849C1.12936 15.6412 1.34132 15.729 1.56234 15.729C2.88842 15.729 4.16019 15.2022 5.09787 14.2645C6.03555 13.3269 6.56234 12.0551 6.56234 10.729V2.39567C6.56234 1.95364 6.38674 1.52972 6.07418 1.21716C5.76162 0.904599 5.3377 0.729004 4.89567 0.729004H2.39567Z"
      stroke="#DF951D"
      strokeWidth="1.45833"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
