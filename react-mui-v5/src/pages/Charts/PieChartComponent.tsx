import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Surface,
  Symbols,
} from "recharts";
import ControlledTooltip from "./ControlledTooltip";

const PieChartComponent = () => {
  const data = [
    {
      name: "Video provides a powerful way to help you prove your point.",
      value: 4
    },
    {
      name: "Lợi đẹp trai",
      value: 4
    },
    {
      name:
        "When you click Online Video, you can paste in the embed code for the video you want to add",
      value: 1
    },
    {
      name:
        "You can also type a keyword to search online for the video that best fits your document.",
      value: 3
    },
    {
      name:
        "To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other",
      value: 2
    },
    {
      name:
        "dd header, footer, cover page, and text box designs that complement each other",
      value: 1
    }
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "green"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }:  {
    cx: any;
    cy: any;
    midAngle: any;
    innerRadius: any;
    outerRadius: any;
    percent: any;
    index: any;
  }) => {

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {/* {`${(percent * 100).toFixed(0)}%`} */}
      </text>
    );
  };

  const renderCusomizedLegend = (props: any) => {
    const { payload } = props;
    console.log("payload", payload);

    return (
      <div className="customized-legend" style={{ display: "flex" }}>
        {payload.map((entry: any, index: string) => {
          const { dataKey, color, value } = entry;
          let textDisplay = value.slice(0, 10);
          console.log("label", value.slice(0, 10));
          return (
            <ControlledTooltip id={index} msg={value}>
              <span
                className="legend-item"
                onClick={() => {}}
                style={{ marginRight: "6px" }}
              >
                <Surface
                  width={10}
                  height={10}
                  // viewBox="0 0 10 10"
                  onClick={() => {}}
                  style={{ marginRight: "10px" }}
                >
                  <Symbols
                    cx={5}
                    cy={5}
                    type="circle"
                    size={50}
                    fill={color}
                    onClick={() => {}}
                  />
                </Surface>
                <span onClick={() => {}}>{textDisplay}</span>
              </span>
            </ControlledTooltip>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="row d-flex justify-content-center text-center">
          <h1>Favorite Beverages - technostuf.com</h1>
          <hr />
          <div className="col-md-8">
            <ResponsiveContainer
              width={400}
              height={400}
              className="text-center"
            >
              <PieChart width={700} height={700}>
                <Legend
                  iconType="circle"
                  layout="vertical"
                  verticalAlign="bottom"
                  align="center"
                  content={renderCusomizedLegend}
                />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};
export default PieChartComponent;
