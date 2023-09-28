import "@/sass/components/_roundedButton.scss";

interface IRoundedButton {
  text: string;
  light?: string;
}

const RoundedButton = ({ text, light }: IRoundedButton) => {
  return (
    <div
      className={`${
        light ? "rounded__button--light rounded__button" : "rounded__button"
      }`}
    >
      {text}
    </div>
  );
};

export default RoundedButton;
