import { IoIosArrowBack } from "react-icons/io";
import styles from "@/styles/Home.module.css";

interface Props {
	flip: Function | null;
}

export default function BackArrow({ flip }: Props) {
	return (
		<div className={styles.back_arrow}>
			<h3>
				<IoIosArrowBack
					onClick={() => {
						flip && flip();
					}}
					style={{ cursor: "pointer" }}
				/>
			</h3>
		</div>
	);
}
