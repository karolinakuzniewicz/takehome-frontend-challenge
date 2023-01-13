import dynamic from "next/dynamic";
import { Chart as _Chart } from "react-charts";

const CustomChart = dynamic(
  () => import("react-charts").then((mod) => mod.Chart as any),
  {
    ssr: false,
  }
) as typeof _Chart;

export { CustomChart as Chart };
