import styles from "@/styles/Home.module.css";

export default function ChartLabels() {
	return (
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
	);
}
