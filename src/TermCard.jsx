import { createElement } from "react";
import './TermCard.css';

export const TermCard = ({titel, description, onDelete, id}) => {
	const handelDeleteTerm = () => {
		onDelete(id);
	};

	return (
		<div className="term-card">
			<h2 className="term-card__title">{titel}</h2>
			{description && (
				<p className="term-card__description">{description}</p>
			)}
			<button 
				type="button" 
				className="term-card__delete"
				onClick={handelDeleteTerm}
			>
					Удалить
			</button>
		</div>
	);
}