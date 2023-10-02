"use client";

import { useState } from "react";

import "@/sass/components/_taxesSummary.scss";

import { ITaxSummary } from "@/interface";
import { ITaxSummaryMonthes } from "@/interface";

const TaxesSummary = ({ summary }: { summary: ITaxSummary[] }) => {
  return (
    <div className="taxes__summary__visual">
      <div className="taxes__summary__visual__heading">
        <div className="taxes__summary__visual__heading__text">Tax Summary</div>
        <select className="taxes__summary__visual__heading__select">
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="taxes__summary__visual__person">
        From {summary[0].person}
      </div>
      <div className="taxes__summary__visual__stats">
        <div className="taxes__summary__visual__stats__total">$5,600</div>
        <div className="taxes__summary__visual__stats__changing">+12%</div>
      </div>
      <div className="taxes__summary__visual__columns">
        {summary.map((summaryItem) =>
          summaryItem.monthes.map((month) => (
            <div
              key={month.id}
              className="taxes__summary__visual__columns__item"
            >
              <div
                className="taxes__summary__visual__columns__item__overlay"
                style={{ height: `${month.number}%` }}
              ></div>
              <div className="taxes__summary__visual__columns__item__month">
                {month.name}
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default TaxesSummary;
