import { useState } from "react";
import { buildWeeks, buildDayNames } from "../utils/generator.ts";
import { startOfMonth, addDays, getDate } from "date-fns";
function DatePicker({ calendar }: any) {
  const { year, monthIndex } = calendar; // 传入year,monthIndex可以动态生成calendar表
  // let [dayNames, setDayNames] = useState<string[]>([]);
  // let [weeks, setWeeks] = useState([]);
  const weeks = buildWeeks(year, monthIndex); // 传入年月,月份从0开始，这里使用
  const dayNames: string[] = [
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
    "星期七",
  ];
  // setDayNames([...buildDayNames()]);
  /* 
  let weeks = buildWeeks(); */
  // setWeeks(buildWeeks());
  /* let date = new Date();
  let start = startOfMonth(date); */
  // date.setDate(start.getDate()); // 设置号
  /*  console.log(date.getDate()); // 号
  console.log(date.getDay() - 1); // 星期
  console.log(addDays(start, -1 * (start.getDay() - 1))); // 本月第一个数向前推星期-1天到达本章表第一天 */
  return (
    <>
      <table>
        <thead>
          {dayNames.map((dayName, i) => {
            return <th key={i}>{dayName}</th>;
          })}
        </thead>
        {/* jsx中一定要有返回的reactnode节点 */}
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j: number) => (
                <td key={j}>{getDate(day)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h1></h1>
      {/* 本月是星期几 */}
      {/* {console.log(startOfMonth(new Date()))} */}
      {/*  {console.log(addDays(startOfMonth(new Date()), -1))}
      {console.log(new Date().getDate())} */}
    </>
  );
}

export default DatePicker;
