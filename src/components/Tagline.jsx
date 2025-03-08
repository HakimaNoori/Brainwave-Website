import brackect from "../assets/svg/Brackets";

const Tagline = ({className, children}) => {
    return (
      <div className={`tagline flex items-center ${className || ""}`}>
            {brackect("left")}
            <div className="mx-3 text-n-3">{children}</div>
        {brackect("right")}
      </div>
    );
};

export default Tagline;