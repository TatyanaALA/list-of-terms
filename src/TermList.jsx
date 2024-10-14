import { TermCard } from "./TermCard";
import './TermList.css';

export const TermList = ({ terms, onDelete }) => {
	return (
		<ul className="term-list">
			{terms.map((item) => (
			<li className="term-list__item" key={item.id}>
				<TermCard 
					titel={item.titel}
					description={item.description}
					onDelete={onDelete}
					id={item.id}
				/>
			</li>
			))}
		</ul>
	);
}