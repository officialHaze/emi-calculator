import { useEffect, useState } from "react";
import styles from "@/styles/Footer.module.css";

interface Props {
	poppins: any;
}

export default function Footer({ poppins }: Props) {
	const [currentYear, setCurrentYear] = useState("");
	useEffect(() => {
		const currentDate = new Date();
		setCurrentYear(currentDate.getFullYear().toString());
	}, []);

	return (
		<div className={`${poppins.className} ${styles.footer_container}`}>
			<p>&copy; Copyright {currentYear}</p>
			<p>Made by Moinak Dey</p>
		</div>
	);
}
