import { buildMonths } from "../../utils/generator";
function MonthPicker({ calendar }: any) {
  const months = buildMonths();

  return (
    <>
      <table>
        {months.map((month, i) => (
          <tr>
            {month.map((row, j) => (
              <td>{row.name}</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
}

export default MonthPicker;
