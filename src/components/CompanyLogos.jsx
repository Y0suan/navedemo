import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
   
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            {/* <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1718550219/vxnppbaiv4jont2hvmlk.png' width={50} height={28} alt={logo} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
