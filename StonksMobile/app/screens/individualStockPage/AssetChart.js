import { LineChart } from "react-native-svg-charts";

const AssetChart = () => {

    const data = Array.from({length: 60}, () => ({ value: 2.15 + ((Math.random() - 0.5) * (Math.random() * 10))}));

    const data2 = [
        2.15,
       2.25,
        2.35,
        2.05,
        1.95,
        1.85,
        2.05,
        2.25,
        2.45,
        2.55,
        2.45
    ]

    return (
        <LineChart
            data={data2}
        />
    );

}

export default AssetChart;
