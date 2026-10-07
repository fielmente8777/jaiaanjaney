import clsx from "clsx";

interface DescriptionProps {
  children?: React.ReactNode;
  className?: string;
  text?: string;
}

const Description: React.FC<DescriptionProps> = ({
  children,
  className,
  text,
}) => {
  return (
    <p
      className={clsx(
        "text-light text-base md:text-[20px] md:leading-[30px] leading-relaxed font-light",
        className
      )}
    >
      {children || text}
    </p>
  );
};

export default Description;
