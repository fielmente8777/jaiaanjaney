import { EyebrowIcon } from "@/utils/icons";
interface TaglineProps {
  eyebrow: string;
  className?: string;
  wrapperClassName?: string;
  textColor?: string;
  showIcon?: boolean;
}

const Tagline: React.FC<TaglineProps> = ({
  eyebrow,
  className,
  wrapperClassName = "",
  textColor,
  showIcon = true,
}) => {
 return (
    <div className={`flex flex-col items-center gap-2 ${wrapperClassName}`}>
      {showIcon && (
        <div
          className={
            wrapperClassName.includes("items-start") ? "" : "mx-auto"
          }
        >
          <EyebrowIcon />
        </div>
      )}
      <p
        className={`text-lg italic font-secondary ${textColor || "text-primary"} font-semibold ${className || ""}`}
      >
        {eyebrow}
      </p>
    </div>
  );
};

export default Tagline;
