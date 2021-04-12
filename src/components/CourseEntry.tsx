import React from 'react';

import { CourseEntryProps } from 'src/properties';

import UnorderedList from './UnorderedList';

import './CourseEntry.scss';

const CourseEntry: React.FC<CourseEntryProps> = (
	{
		title,
		grade,
		average,
		highlights,
		summary
	}: CourseEntryProps
) => {
	return (
		<div className="course">
			<h5 className="course-title">{title}</h5>
			<div className="grades">
				<div className="my-grade-label">Grade:</div>
				<div className="my-grade">{grade}</div>
				<div className="average-grade-label">Average:</div>
				<div className="average-grade">{average}</div>
			</div>
			<UnorderedList items={highlights}/>
			<p className="summary">{summary}</p>
		</div>
	);
};

export default CourseEntry;
