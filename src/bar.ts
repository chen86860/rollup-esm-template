import dayjs from "dayjs";

export const bar = () => {
  console.log("current time: ", dayjs().format("YYYY-MM-DD HH:mm:ss"));
};
