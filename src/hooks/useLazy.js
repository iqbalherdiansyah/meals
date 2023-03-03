import React, { useEffect, useState } from "react";

function useLazy() {
	const [elm, setElm] = useState([]);

	const callback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const img = Array.from(entry.target.children).find(({ classList }) =>
					classList.contains("observe")
				);
				const dataSrc = img.dataset.src;
				img.setAttribute("src", dataSrc);
				img.classList.replace("opacity-0", "opacity-100");
			}
		});
	};

	const options = {
		threshold: 1,
	};

	useEffect(() => {
		const observer = new IntersectionObserver(callback, options);
		elm.length > 1 &&
			elm.forEach((item) => {
				observer.observe(item);
			});
	}, [elm.length, options]);

	return [setElm];
}

export default useLazy;
