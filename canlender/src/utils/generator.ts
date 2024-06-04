import { chunk } from "lodash";
import { startOfWeek, startOfMonth, addDays, setMonth, format } from "date-fns"; // 获取本月第一天是星期几 // 给指定天添加几天是星期几,是几号
export function buildWeeks(year: number, monthIndex: number) {
  let weeks = new Array(6 * 7).fill(0); // 生成42个数据的一维数组，使用chunk来分割数组
  // 生成传入年月的date对象
  const firstDayOfMonth = startOfMonth(new Date(year, monthIndex));
  // 生成表第一天，本周从周日开始
  const firstDayOfCanlender = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });
  weeks = weeks.map((_, i: number) => addDays(firstDayOfCanlender, i)); // 一共添加到42;可以写成链式形式：声明二维数组，使用map生成新的数组，链式可以减少一次赋值
  return chunk(weeks, 7); // 每7个分为一组
  // 对比写法
  /* let date = new Date();
  let start = startOfMonth(date); // 日期获取本月第一天
  let start2 = startOfWeek(start); // 本月第一天获得本表第一天
  console.log(start, start2);
  //   let firstDayOfForm=addDays(start, -1 * (start.getDay() - 1));
  //   let formDate = start2.getDate();// 获得日期
  //   addDays(, 1);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      weeks[i][j] = start2.getDate();
      console.log(1, start2.getDate());
      start2 = addDays(start2, 1);
    }
  }
  return weeks; */
}
/**
 * @return 星期几
 */
export function buildDayNames() {
  return ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期七"];
}
// 生成月视图
export function buildMonths() {
  let months = new Array(4 * 3)
    .fill(0)
    .map((_, i: number) => setMonth(new Date(), i))
    .map((month, j) => {
      return {
        name: format(month, "MMMM"),
        key: j,
      };
    });
  console.log(months);
  return chunk(months, 3);
}
/**
 *
 * @param middle 中间值
 * @param windowSize 左右大小默认为3
 * @returns 返回年list
 */

export function buildYears(middle: number, windowSize = 3): number[] {
  // 中间数和前后size为3，一共7个数
  const start = middle - windowSize;
  const end = middle + windowSize;
  const years = [];
  for (let i = start; i <= end; i++) {
    years.push(i);
  }
  return years;
}
