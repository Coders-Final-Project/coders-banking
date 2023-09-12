import RoundedButton from "../RoundedButton/RoundedButton";

import "@/sass/components/_getStarted.scss";

const GetStarted = () => {
  return (
    <div className="getstarted">
      <div className="getstarted__title">
        get started <span>today</span>
      </div>
      <div className="getstarted__desc">
        Streamline your global business and grow your team effortlessly.
      </div>
      <RoundedButton text="Create Account" />
    </div>
  );
};

export default GetStarted;
