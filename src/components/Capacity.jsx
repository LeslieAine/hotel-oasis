import React from "react";

const Capacity = () => {
  let statistics = [
    { quantity: "4+", item: "Hotels" },
    { quantity: "127+", item: "Rooms" },
    { quantity: "6+", item: "Beaches" },
    { quantity: "458+", item: "Guests" },
  ];
  return (
    <div className="bg-blackClr py-20 px-5">
      <div className="max-w-5xl px-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 justify-between">
        {statistics.map((statistic) => (
          <div className="flex flex-col gap-10" key={statistic.item}>
            <div className="text-primaryClr text-7xl font-normal font-btnFont">{statistic.quantity}</div>
            <div className="text-white">{statistic.item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capacity;
