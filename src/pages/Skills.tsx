import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import SkillsGroup from 'src/components/SkillsGroup';
import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import { SKILLS_INFO } from 'src/constants/skills-info';

import './Skills.scss';

const title = 'Skills';

const Skills: React.FC = () => {

	return (
		<IonPage>
			<TopBar title={title} />

			<IonContent >
				<TopBarFullscreen title={title} />
				<div className="page">
					<div className="skills">
						{SKILLS_INFO.map((skillsGroup, i) => <SkillsGroup key={i}
							name={skillsGroup.name}
							skills={skillsGroup.skills}
						/>)}
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Skills;
