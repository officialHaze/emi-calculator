interface Values {
	loan: number;
	down: number;
	tenure: number;
	interest: number;
}

export function calculateEMI({ loan, down, tenure, interest }: Values): string {
	const monthlyInt = interest / 12;
	const r = monthlyInt / 100;
	const p = loan - down;

	const numerator = p * r * Math.pow(1 + r, tenure);
	const denominator = Math.pow(1 + r, tenure) - 1;
	const emi = numerator / denominator;
	return emi.toFixed(2);
}
