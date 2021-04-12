import React from 'react';

import { WorkEntryProps } from 'src/properties';

import UnorderedList from './UnorderedList';

import './WorkEntry.scss';

const WorkEntry: React.FC<WorkEntryProps> = (
	{
		company,
		terms
	}: WorkEntryProps
) => {
	return (
		<div className="work-entry">
			{company ? <h3 className="company-name">{company}</h3> : null}
			{terms.map((term, i) => <div key={i}>
				<div>
					<div className="position">{term.position}</div>
					<div className="duration">{term.start} - {term.end}</div>
				</div>
				<UnorderedList items={term.highlights}/>
				{term.summary ? (
					<div className="summary">
						{term.summary.map((summaryItem, i) =>
							<p className="summary-item" key={i}>
								{summaryItem}
							</p>)}
					</div>
				) :
					null
				}
			</div>
			)}
		</div>
	);
};

export default WorkEntry;
