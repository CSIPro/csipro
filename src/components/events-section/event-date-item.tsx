import { format } from "date-fns";

interface Props {
  date: Date;
}

export const EventDateItem = ({ date }: Props) => {
  return (
    <span className="rounded-full bg-primary/20 px-2 py-1 text-white">
      {format(date, "dd/MMM/yy '@' HH:mm 'h'")}
    </span>
  );
};
