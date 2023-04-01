import styles from "@/styles/Home.module.css";

interface Props {
	revisedPayables: {
		totalPrincipal: string;
		totalAmount: string;
		totalInterest: string;
	};
}

export default function TotalPayables({ revisedPayables }: Props) {
	return (
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
	);
}
