import React from 'react';

import { WorkEntryProps } from 'src/properties';

import './WorkEntry.scss';

const WorkEntry: React.FC<WorkEntryProps> = (
	{
		company,
		position,
		start,
		end,
		highlights,
		summary
	}: WorkEntryProps
) => {
	return (
		<div className="work-entry">
			{company ? <h3 className="company-name">{company}</h3> : null}
			<div>
				<div className="position">{position}</div>
				<div className="duration">{start} - {end}</div>
			</div>
			<ul className="highlights">
				{highlights.map((highlight, i) => <li className="highlight" key={i}>
					{highlight}
				</li>)}
			</ul>
			{summary ? (
				<div className="summary">
					{summary.map((summaryItem, i) => <p className="summary-item" key={i}>
						{summaryItem}
					</p>)}
				</div>
			) :
				null
			}
		</div>
	);
};

export default WorkEntry;
