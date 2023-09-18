import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="flex flex-col p-4 bg-blue-200 rounded-md">
      <h2 className="text-center">
        <span className="font-bold text-7xl">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="my-8 text-4xl text-center">{name}</h4>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Feature feature={feature} key={idx}></Feature>
        ))}
      </div>

      <button className="w-full mt-12 font-bold text-white bg-green-500 btn hover:bg-green-400">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
