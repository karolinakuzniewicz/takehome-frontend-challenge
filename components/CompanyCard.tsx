import { useState } from "react";
import { Company } from "../types";

import { Icon } from "./Icon";
import { Bar } from "./charts/Bar";
import { Line } from "./charts/Line";

export interface CardProps {
  company: Company;
}

export function CompanyCard({ company }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const linkedInUrl = company?.["LinkedIn - URL"];
  const twitterUrl = company?.["Twitter - URL"];
  const instagramUrl = company?.["Instagram - URL"];

  return (
    <div
      className="bg-slate-800 border border-slate-800 rounded p-6 cursor-pointer hover:border-slate-600"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="col-span-2 flex items-center">
          <h3 className="text-gray-50">{company?.["Company Name"]}</h3>
        </div>
        <div className="col-span-1 flex justify-end items-center p-2">
          {!isFavourite ? (
            <Icon
              name="heart-outline"
              width="24"
              height="24"
              className="hover:fill-red-400 hover:stroke-red-400"
              onClick={(e) => {
                e.stopPropagation();
                setIsFavourite(!isFavourite);
              }}
            />
          ) : (
            <Icon
              name="heart"
              width="24"
              height="24"
              className="fill-red-400"
              onClick={(e) => {
                e.stopPropagation();
                setIsFavourite(!isFavourite);
              }}
            />
          )}
        </div>
        <div className="col-span-2 flex flex-col space-y-0.5">
          <p>
            Located: <b className="text-slate-50">{company?.["HQ Region"]}</b>
          </p>
          <p>
            Industry:{" "}
            <span className="text-slate-50">{company?.["Industry"]}</span>
          </p>
        </div>
        <div className="col-span-1">
          <p className="text-right">
            Rank: <span className="text-slate-50">{company?.Rank}</span> |
            Employees:{" "}
            <span className="text-slate-50">{company?.["Employee Count"]}</span>
          </p>
        </div>
      </div>
      {isOpen && (
        <div className="grid grid-cols-6 gap-4 mt-6">
          <div className="col-span-3">
            <div className="mt-3 flex flex-col space-y-1">
              <h5 className="mb-4">Details:</h5>
              <div className="flex">
                <Icon name="link" width="24" height="24" className="mr-2" />
                <a target="_blank" href={company?.Domain}>
                  {company?.Domain}
                </a>
              </div>
              {linkedInUrl && (
                <div className="flex">
                  <Icon name="link" width="24" height="24" className="mr-2" />
                  <a target="_blank" href={linkedInUrl}>
                    LinkedIn
                  </a>
                </div>
              )}
              {twitterUrl && (
                <div className="flex">
                  <Icon name="link" width="24" height="24" className="mr-2" />
                  <a target="_blank" href={twitterUrl}>
                    Twitter
                  </a>
                </div>
              )}
              {instagramUrl && (
                <div className="flex">
                  <Icon name="link" width="24" height="24" className="mr-2" />
                  <a target="_blank" href={instagramUrl}>
                    Instagram
                  </a>
                </div>
              )}
              <p>
                Founded in{" "}
                <span className="text-slate-50">
                  {company?.["Founded Date"]}
                </span>
              </p>
            </div>
            <p className="mt-4 italic">{company?.Description}</p>
          </div>
          <div className="col-span-3 flex justify-center">
            {Math.floor(Math.random() * 10) % 2 ? <Bar /> : <Line />}
          </div>
        </div>
      )}
    </div>
  );
}
