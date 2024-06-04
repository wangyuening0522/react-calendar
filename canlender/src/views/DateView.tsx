import DatePicker from "./DatePicker";
import ViewLayout from "../components/ViewLayout/ViewLayout";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
function DateView(props: any) {
  const { calendar, setCalendar, setIsDateView } = props;
  let { year, monthIndex } = calendar;
  // 计算月的index,0-12->-1-11
  const incrementMonthIndex = (increment: number) => {
    // 2月变成1月(2->1),修改年月，修改初始年月，就可以计算对应calendar
    // 1月变成12月(0->11)
    // -1mod12=11 0mod12=0 1mod12=1 2mod12=2 11mod12=11 ->(-1+12)%12=11
    // 计算月
    const incrementMonthIndex = mod(monthIndex + increment, 12);
    // 计算年 monthIndex-1%12 1->12月 1-1/12=0 2-1/12=9 在12内都是0
    // 0-1/12=-0.3 math.floor 是0 1月向前走12year走
    const incrementYear = year + Math.floor((monthIndex + increment) / 12);
    setCalendar({
      year: incrementYear,
      monthIndex: incrementMonthIndex,
    });
  };
  // -1 12 (-1%12)+12=-1+12=11  11%12=11
  // mod是非负数 但是取余可能是正数
  function mod(m: number, n: number) {
    // 取余 0%12=0 11%12=11
    return ((m % n) + n) % n; // 0%12=0 0+12=12 12%12=0
  }
  // 计算月份
  const gotoPreviousMonth = () => {
    incrementMonthIndex(-1);
  };
  const gotoNextMonth = () => {
    incrementMonthIndex(+1);
  };
  return (
    <>
      <ViewLayout
        header={{
          onClickHeader: setIsDateView,
          leftElement: <ArrowLeftOutlined onClick={gotoPreviousMonth} />,
          middleElement: (
            <div>
              {year}年 {monthIndex}月
            </div>
          ),
          rightElement: <ArrowRightOutlined onClick={gotoNextMonth} />,
        }}
        bodyElement={<DatePicker calendar={calendar}></DatePicker>}
        footerElement={<div>我是底部</div>}
      ></ViewLayout>
    </>
  );
}
export default DateView;
