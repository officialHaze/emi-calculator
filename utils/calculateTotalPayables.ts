export function calculateTotalPayables(emi: number, tenure: number, loan: number, down: number) {
	const totalAmount = emi * tenure;
	const totalPrincipal = loan - down;
	const totalPayableInterest = totalAmount - totalPrincipal;

	const payables = {
		totalPayableAmount: totalAmount.toFixed(2),
		totalPrincipal: totalPrincipal.toFixed(2),
		totalPayableInterest: totalPayableInterest.toFixed(2),
	};

	return payables;
}
