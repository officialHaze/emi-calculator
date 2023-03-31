import styles from "@/styles/LoanForm.module.css";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";

export default function LoanForm({ poppins, flip, formData }: any) {
	const [inputValues, setInputValues] = useState({
		loan: "",
		down: "",
		tenure: "",
		interest: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (
			inputValues.loan ||
			inputValues.down ||
			inputValues.tenure ||
			inputValues.interest !== ""
		) {
			formData(inputValues);
			flip();
			setInputValues({
				loan: "",
				down: "",
				tenure: "",
				interest: "",
			});
		}
	};

	//handle change in input values
	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;
		switch (name) {
			case "loanAmount":
				setInputValues(prevObj => {
					return {
						...prevObj,
						loan: value,
					};
				});
				break;
			case "downPay":
				setInputValues(prevObj => {
					return {
						...prevObj,
						down: value,
					};
				});
				break;
			case "tenure":
				setInputValues(prevObj => {
					return {
						...prevObj,
						tenure: value,
					};
				});
				break;
			case "interest":
				setInputValues(prevObj => {
					return {
						...prevObj,
						interest: value,
					};
				});
				break;

			default:
				break;
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className={styles.input_container}>
					<label htmlFor="loan-amount">Loan Amount / Item Price</label>
					<div>
						<div className={styles.input_placeholder}>
							<FaRupeeSign />
						</div>
						<input
							type="number"
							id="loan-amount"
							name="loanAmount"
							onChange={handleChange}
							value={inputValues.loan}
						/>
					</div>
				</div>
				<div className={styles.input_container}>
					<label htmlFor="down-payment">Downpayment</label>
					<div>
						<div className={styles.input_placeholder}>
							<FaRupeeSign />
						</div>
						<input
							type="number"
							id="down-payment"
							onChange={handleChange}
							value={inputValues.down}
							name="downPay"
						/>
					</div>
				</div>
				<div className={styles.tenure_interest_input_container_wrapper}>
					<div className={styles.input_container}>
						<label htmlFor="tenure">Tenure</label>
						<div>
							<input
								type="number"
								id="tenure"
								list="months"
								onChange={handleChange}
								value={inputValues.tenure}
								name="tenure"
							/>
							<div className={styles.input_placeholder_tenure}>
								<p>mo</p>
							</div>
						</div>
						<datalist id="months">
							<option value={6} />
							<option value={12} />
							<option value={18} />
							<option value={24} />
							<option value={30} />
							<option value={36} />
							<option value={38} />
							<option value={42} />
						</datalist>
					</div>
					<div className={styles.input_container}>
						<label htmlFor="interest">Interest Rate (p.a.)</label>
						<div>
							<input
								type="number"
								id="interest"
								onChange={handleChange}
								value={inputValues.interest}
								name="interest"
							/>
							<div className={styles.input_placeholder_interest}>%</div>
						</div>
					</div>
				</div>
				<div className={styles.calculate_btn_container}>
					<button className={poppins.className}>Calculate your EMI</button>
				</div>
			</form>
		</div>
	);
}
