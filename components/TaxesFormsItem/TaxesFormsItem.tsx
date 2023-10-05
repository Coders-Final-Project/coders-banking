import "@/sass/components/_taxesFormsItem.scss";

const TaxesFormsItem = ({ title, order }: { title: string; order: number }) => {
  return (
    <div className="taxes__forms__body__item">
      <div className="taxes__forms__body__item__order">{order}</div>
      <div className="taxes__forms__body__item__info">
        <div className="taxes__forms__body__item__info__title">{title}</div>
        <div className="taxes__forms__body__item__info__learnmore">
          Learn more
        </div>
      </div>
    </div>
  );
};

export default TaxesFormsItem;
