import "@/sass/components/_roundedButton.scss";

interface IRoundedButton {
  text: string;
}

const RoundedButton = ({ text }: IRoundedButton) => {
  return <div className="rounded__button">{text}</div>;
};

export default RoundedButton;
