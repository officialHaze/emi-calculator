export function seperateDigits(value: string) {
	const integerVal = parseFloat(value);
	const revisedVal = integerVal.toLocaleString("en-IN", { style: "currency", currency: "INR" });
	return revisedVal;
}
