import { useState } from "react";
import DateView from "./DateView";
import MonthYearView from "./MonthYearView";
import { getYear, getMonth } from "date-fns";
const Calendar = function () {
  const [isDateView, setIsDateView] = useState(true); // 把set传递给DateView，点击header的时候变化组件显示
  // const [pageView, setPageView] = useState(0);
  // 因为两个视图都需要年和月，所以定义到父组件中
  let today = new Date();
  const initialCalendar = {
    year: getYear(today),
    monthIndex: getMonth(today),
  };
  const [calendar, setCalendar] = useState(initialCalendar);

  return (
    <>
      {isDateView ? (
        <DateView
          setCalendar={setCalendar}
          calendar={calendar}
          setIsDateView={setIsDateView}
        ></DateView>
      ) : (
        <MonthYearView
          calendar={calendar}
          onSelectMonthYear={setIsDateView}
        ></MonthYearView>
      )}
    </>
  );
};
export default Calendar;
