import { useEffect, useState } from "react";
import { seperateDigits } from "@/utils/seperateDigitsWithComma";
import styles from "@/styles/AllInfo.module.css";

interface Props {
	formData: {
		loan: string;
		down: string;
		tenure: string;
		interest: string;
	};
}

export default function AllInfo({ formData }: Props) {
	const [revisedData, setRevisedData] = useState({
		loan: "",
		down: "",
	});

	//to convert the loan and downpayment amounts into locale string
	useEffect(() => {
		const revisedLoanValue = seperateDigits(formData.loan);
		const revisedDownValue = seperateDigits(formData.down);

		setRevisedData({
			loan: revisedLoanValue,
			down: revisedDownValue,
		});
	}, [formData]);

	return (
		<div className={styles.main_container}>
			<div className={styles.labels}>
				<p>Loan Amount</p>
				<p>{revisedData.loan}</p>
			</div>
			<div className={styles.labels}>
				<p>Downpayment</p>
				<p>{revisedData.down}</p>
			</div>
			<div className={styles.labels}>
				<p>Tenure</p>
				<p>{formData.tenure} months</p>
			</div>
			<div className={styles.labels}>
				<p>Interest Rate (p.a)</p>
				<p>{formData.interest} %</p>
			</div>
		</div>
	);
}
