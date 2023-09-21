import moment from "moment";

const today = moment().startOf("day").valueOf();
const oneHour = 3600000; // milliseconds

const dummyData = {
  [today + 9 * oneHour]: [
    {
      id: "event-1",
      title: "Morning Meeting",
      start: today + 9 * oneHour,
      end: today + 10 * oneHour,
    },
  ],
  [today + 13 * oneHour]: [
    {
      id: "event-2",
      title: "Lunch with John",
      start: today + 13 * oneHour,
      end: today + 14 * oneHour,
    },
  ],
  [today + 15 * oneHour]: [
    {
      id: "event-3",
      title: "Project Review",
      start: today + 15 * oneHour,
      end: today + 16 * oneHour,
    },
  ],
};

export default dummyData;
