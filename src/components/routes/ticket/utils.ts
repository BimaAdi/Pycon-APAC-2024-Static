/**
 * format number to string rupiah
 * @param price number
 * @returns string
 *
 * @example
 * let x = priceToString(50000);
 * console.log(x); // Rp50.000
 *
 * @example
 * let x = priceToString(1500000);
 * console.log(x); // Rp1.500.000
 */
export const priceToString = (price: number): string => {
	const priceArray = price.toString().split("");
	const formatedPrice: string[] = [];
	let counter = 0;
	for (let i = priceArray.length - 1; i >= 0; i--) {
		formatedPrice.unshift(priceArray[i]);
		counter++;
		if (counter % 3 === 0 && i !== 0) {
			formatedPrice.unshift(".");
		}
	}
	return `Rp${formatedPrice.join("")}`;
};
