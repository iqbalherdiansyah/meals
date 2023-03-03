import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useLazy from "../hooks/useLazy";

function Meals() {
	const [meals, setMeals] = useState(null);
	const { listId } = useParams();
	const [setElm] = useLazy();
	const ref = useRef([]);

	useEffect(() => {
		ref.current && setElm(ref.current);
	}, []);

	const fetchMeals = async () => {
		const res = await axios.get("filter.php", {
			params: {
				i: listId,
			},
		});
		console.log(res.data.meals);
		setMeals(res.data.meals);
	};

	useEffect(() => {
		fetchMeals();
	}, []);

	return (
		<div className="grid grid-cols-5 gap-5">
			{meals &&
				meals.map((meal, i) => {
					const { idMeal, strMeal, strMealThumb } = meal;
					return (
						<Link
							to={`/meals/detail/${strMeal}`}
							key={idMeal}
							className="flex flex-col items-center shadow-lg border p-5 rounded-lg hover:bg-slate-200"
						>
							<div ref={(e) => (ref.current[i] = e)} className="w-full h-40">
								<img
									data-src={strMealThumb}
									alt=""
									className="w-full h-full object-contain opacity-0 transition-all duration-1000 observe"
								/>
							</div>
							<h1 className="text-2xl font-semibold">{strMeal}</h1>
						</Link>
					);
				})}
		</div>
	);
}

export default Meals;
