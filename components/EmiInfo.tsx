import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { seperateDigits } from "@/utils/seperateDigitsWithComma";
import BackArrow from "./BackArrow";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
	handleClick: Function;
	emiValue: string;
	payables: {
		totalAmount: string;
		totalPrincipal: string;
		totalInterest: string;
	};
}

export default function EmiInfo({ handleClick, emiValue, payables }: Props) {
	const [revisedEmiVal, setRevisedEmiVal] = useState<string>();
	const [revisedPayables, setRevisedPayables] = useState({
		totalPrincipal: "",
		totalInterest: "",
		totalAmount: "",
	});
	const [dataSets, setDataSets] = useState<any | null>(null);

	//seperate digist with comma
	useEffect(() => {
		const revisedValue = seperateDigits(emiValue);

		const totalPrincipal = seperateDigits(payables.totalPrincipal);
		const totalAmount = seperateDigits(payables.totalAmount);
		const totalInterest = seperateDigits(payables.totalInterest);

		setRevisedEmiVal(revisedValue);
		setRevisedPayables({
			totalPrincipal: totalPrincipal,
			totalInterest: totalInterest,
			totalAmount: totalAmount,
		});
	}, [emiValue, payables]);

	//setting the dataset for pie chart
	useEffect(() => {
		setDataSets({
			datasets: [
				{
					data: [payables.totalPrincipal, payables.totalInterest, payables.totalAmount],
					backgroundColor: ["#2F58CD", "#F5EA5A", "#03C988"],
					borderRadius: 0,
					borderWidth: 0,
				},
			],
		});
	}, [payables]);

	return (
		<div className={styles.result}>
			<div className={styles.emi_value_wrapper}>
				<div
					className={styles.back_arrow_container}
					onClick={() => {
						handleClick();
					}}>
					<BackArrow flip={null} />
				</div>
				<div className={styles.emi_value_container}>
					<h1>{revisedEmiVal}</h1>
					<p>EMI per month</p>
				</div>
			</div>
			<div className={styles.dougnut_container}>
				{dataSets && (
					<Doughnut
						data={dataSets}
						options={{
							responsive: true,
							maintainAspectRatio: true,
							cutout: "85%",
							plugins: {
								legend: {
									display: false,
								},
							},
						}}
					/> //pie chart
				)}
				<div className={styles.chart_labels}>
					<ul>
						<li>
							<p>Principal Amount</p>
						</li>
						<li>
							<p>Total Payable Interest</p>
						</li>
						<li>
							<p>Total Payable Amount</p>
						</li>
					</ul>
				</div>

				<div className={styles.chart_labels_value}>
					<ul>
						<li>
							<p style={{ display: "flex", alignItems: "center" }}>
								{revisedPayables.totalPrincipal}
							</p>
						</li>
						<li>
							<p style={{ display: "flex", alignItems: "center" }}>
								{revisedPayables.totalInterest}
							</p>
						</li>
						<li>
							<p style={{ display: "flex", alignItems: "center" }}>
								{revisedPayables.totalAmount}
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
