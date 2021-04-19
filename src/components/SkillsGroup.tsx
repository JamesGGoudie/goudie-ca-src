import React from 'react';

import { SkillsGroupProps } from 'src/properties';

import './SkillsGroup.scss';

const SkillsGroup: React.FC<SkillsGroupProps> = (
	{ name, skills }: SkillsGroupProps
) => {
	return (
		<div className="skills-group">
			<h3 className="skills-group-name">{name}</h3>
			<ul>
				{skills.map((skill, i) =>
					<li className="skill" key={i}>
						<span className="skill-name">{skill.name}</span> | {skill.summary}
					</li>
				)}
			</ul>
		</div>
	);
};

export default SkillsGroup;
