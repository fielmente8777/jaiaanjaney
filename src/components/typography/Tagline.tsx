const Tagline: React.FC<{eyebrow: string, className?: string,textColor?: string}> = ({ eyebrow, className, textColor }) => {
    return (
        <div>
            <p className={`text-lg italic font-secondary ${textColor || 'text-primary'} font-semibold ${className || ''}`}>{eyebrow}</p>
        </div>
    );
}

export default Tagline;