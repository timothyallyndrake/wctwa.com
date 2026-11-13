export const scheduleEffective = "February 23, 2026";

export const officeHours = [
  "Monday–Friday: 2–8pm",
  "Saturday: events only",
  "Sunday: closed",
] as const;

export const weeklyCaption = "Weekly classes, effective February 23, 2026.";

export type Weekday = "monday" | "tuesday" | "wednesday" | "thursday" | "friday";

export type ScheduleRow = {
  time: string;
} & Record<Weekday, string | null>;

export const weeklyRows: ScheduleRow[] = [
  {
    time: "4:00–4:30pm",
    monday: "Tiny Tiger",
    tuesday: "Tiny Tiger",
    wednesday: "Tiny Tiger",
    thursday: "Tiny Tiger",
    friday: null,
  },
  {
    time: "4:40–5:20pm",
    monday: "Level 1",
    tuesday: "Sparring",
    wednesday: "Level 1",
    thursday: "Level 2, 3, and Black Belt",
    friday: "Family",
  },
  {
    time: "5:30–6:10pm",
    monday: "Beginner, ends 6:00",
    tuesday: "Beginner, ends 6:00",
    wednesday: "Beginner, ends 6:00",
    thursday: "Level 1, ends 6:10",
    friday: "Beginner, ends 6:00",
  },
  {
    time: "6:10–6:50pm",
    monday: "Level 2, 3, and Black Belt",
    tuesday: "Family",
    wednesday: "Level 2, 3, and Black Belt",
    thursday: "Family",
    friday: null,
  },
  {
    time: "7:00–7:40pm",
    monday: "Teen, Adult, and Black Belt",
    tuesday: "Teen and Adult Sparring",
    wednesday: "Teen, Adult, and Black Belt",
    thursday: "Teen, Adult, and Black Belt",
    friday: null,
  },
];

export const weekdayLabels: Record<Weekday, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
};

export const weekdays: Weekday[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];
