import MonthPicker from "./Picker/MonthPicker";
import ViewLayout from "../components/ViewLayout/ViewLayout";
import type { MenuProps } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { buildYears } from "../utils/generator";
import "./MonthYearView.less";
import { useState } from "react";
function MonthYearView(props: any) {
  const { onSelectMonthYear, calendar } = props;
  const { year, monthIndex } = calendar;
  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  // 下拉框展示的不同，所以是这个组件的状态
  /*   interface yearsWindowType {
    label: number;
    key: number;
  } */
  // 初始化years,buildYears会变化时执行
  const [years, setYears] = useState<any[]>(
    buildYears(new Date().getFullYear(), 3)
  );

  // 创建下拉菜单选项,当每一项都白承对象的时候，使用一个过渡对象来赋值状态变量

  // 当
  /*   useEffect(() => {
    const buildItems = () => {
      const newYearsWindows = years.map((year: number, i: number) => {
        return {
          label: year.toString(),
          key: i.toString(),
        };
      });
      console.log(1, newYearsWindows);
      // 会重新渲染
      setYearsWindow([...newYearsWindows]);
    };
    buildItems();
  }, [years]); */
  // 在组件挂载时创建 yearsWindow
  let yearsWindow: MenuProps["items"] = [];
  yearsWindow = years.map((year: number, i: number) => ({
    label: year.toString(),
    key: i.toString(),
  }));
  console.log("yearsWindow", yearsWindow);
  // useEffect(() => {}, [years]);让第一次也执行
  // 1.箭头使scroll
  // 获得中间的年份，然后让middle+path
  function getMiddle() {
    // 7个数[0,6] 7/2=3 3正好是居中的
    // return (yearsWindow = Math.floor(years.length / 2));/
  }
  function scroll(path: number) {
    getMiddle();
  }

  // const [isDropDownView, setIsDropDownView] = useState(false);
  return (
    <>
      <ViewLayout
        header={{
          leftElement: (
            <ArrowLeftOutlined
              onClick={() => {
                onSelectMonthYear(true);
              }}
            />
          ),
          middleElement: (
            <div className="middleYearPicker">
              {/*  <div onClick={() => setIsDropDownView(!isDropDownView)}>
                <div className="currentYear">
                  <span>{year}年</span>
                  {isDropDownView ? (
                    <ul className="ul">
                      {yearsWindow.map((year, i) => (
                        <li>{year}</li>
                      ))}
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>
              </div> */}
              <div>
                <Dropdown menu={{ items: yearsWindow }} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      {year}年
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
              <div> {monthIndex}月</div>
            </div>
          ),
        }}
        bodyElement={
          <MonthPicker calendar={{ year, monthIndex }}></MonthPicker>
        }
        footerElement={<div>我是底部</div>}
      ></ViewLayout>
    </>
  );
}
export default MonthYearView;
