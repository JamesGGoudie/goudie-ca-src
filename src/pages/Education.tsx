import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import { EDUCATION_INFO } from 'src/constants';

import './Education.scss';
import UnorderedList from 'src/components/UnorderedList';
import CourseEntry from 'src/components/CourseEntry';

const title = 'Education';

const Education: React.FC = () => {

	return (
		<IonPage>
			<TopBar title={title} />

			<IonContent >
				<TopBarFullscreen title={title} />
				<div className="page">
					<div className="summary">
						<div className="school-name">{EDUCATION_INFO.schoolName}</div>
						<div className="degree">
							{EDUCATION_INFO.degree} with {EDUCATION_INFO.distinction}
						</div>
						<div className="duration">
							{EDUCATION_INFO.start} - {EDUCATION_INFO.end}
						</div>
						<UnorderedList items={EDUCATION_INFO.highlights}/>
					</div>
					<div className="courses">
						<h4 className="courses-header">{EDUCATION_INFO.coursesHeader}</h4>
						{EDUCATION_INFO.coures.map((course, i) => <CourseEntry
							key={i}
							title={course.title}
							grade={course.grade}
							average={course.average}
							highlights={course.highlights}
							summary={course.summary}/>)}
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Education;
