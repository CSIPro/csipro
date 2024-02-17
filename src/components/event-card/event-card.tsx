import React from "react";

interface EventCardProps {
  type: string;
  date: string;
  spots: number;
  title: string;
  duration: number;
}

const EventCard: React.FC<EventCardProps> = (props) => {
  return (
    <div className="w-full border border-primary">
      <div className="flex justify-between">
        <div>
          <span className="flex flex-wrap items-center justify-center gap-2 font-poppins text-2xl text-primary-foreground md:text-6xl">
            <h1 className="">CSI PRO</h1>
            <span className="flex flex-wrap bg-primary-foreground p-1 text-center font-medium text-primary dark:bg-primary dark:text-white">
              {props.title}
            </span>
          </span>
        </div>
        <div>
          <h1 className="text-2xl text-white">{props.date}</h1>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
