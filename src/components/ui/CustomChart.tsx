import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface CustomChartProps {
  data: any[];
  chartType: "line" | "bar";
  xKey: string;
  yKey: string;
  legendName?: string;
  unit?: string;
  dataMin?: number;
  dataMax?: number;
  color?: string;
}

export function CustomChart({
  data,
  chartType,
  xKey,
  yKey,
  legendName = "Série",
  unit = "",
  dataMin = 0,
  dataMax = 0,
  color = "#3b82f6",
}: CustomChartProps) {
  const xAxisConfig = {
    dataKey: xKey,
    tickFormatter: (value: string) => {
      try {
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
          return date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          });
        }
      } catch {}
      return value;
    },
  };

  const yAxisConfig = {
    label: unit ? `Valor (${unit})` : "Valor",
    domain: dataMin && dataMax ? [dataMin - 2, dataMax + 1] : ["auto", "auto"],
    tickFormatter: (value: number) => Number(value).toFixed(1),
  };

  const tooltipConfig = {
    labelFormatter: (value: string) => {
      try {
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
          return `${date.toLocaleDateString(
            "pt-BR"
          )} às ${date.toLocaleTimeString("pt-BR")}`;
        }
      } catch {}
      return value;
    },
    valueFormatter: (value: number) =>
      unit ? `${Number(value).toFixed(2)} ${unit}` : Number(value).toFixed(2),
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      {chartType === "bar" ? (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis
            {...xAxisConfig}
            angle={-45}
            textAnchor="end"
            height={60}
            interval="preserveStartEnd"
            tick={{ fontSize: 12 }}
          />
          <YAxis
            domain={yAxisConfig.domain}
            tickFormatter={yAxisConfig.tickFormatter}
            label={{
              value: yAxisConfig.label,
              angle: -90,
              position: "insideLeft",
              style: { textAnchor: "middle" },
            }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            labelFormatter={tooltipConfig.labelFormatter}
            formatter={(value: number) => tooltipConfig.valueFormatter(value)}
            contentStyle={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          />
          <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="rect" />
          <Bar dataKey={yKey} fill={color} name={legendName} barSize={30} />
        </BarChart>
      ) : (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis
            {...xAxisConfig}
            angle={-45}
            textAnchor="end"
            height={60}
            interval="preserveStartEnd"
            tick={{ fontSize: 12 }}
          />
          <YAxis
            domain={yAxisConfig.domain}
            tickFormatter={yAxisConfig.tickFormatter}
            label={{
              value: yAxisConfig.label,
              angle: -90,
              position: "insideLeft",
              style: { textAnchor: "middle" },
            }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            labelFormatter={tooltipConfig.labelFormatter}
            formatter={(value: number) => tooltipConfig.valueFormatter(value)}
            contentStyle={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          />
          <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
          <Line
            type="monotone"
            dataKey={yKey}
            stroke={color}
            strokeWidth={2}
            name={legendName}
            dot={{ r: 3, fill: color }}
            activeDot={{ r: 6, fill: color }}
          />
        </LineChart>
      )}
    </ResponsiveContainer>
  );
}

