import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import CourseEntry from 'src/components/CourseEntry';
import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';
import UnorderedList from 'src/components/UnorderedList';

import { EDUCATION_INFO } from 'src/constants';

import './Education.scss';

const title = 'Education';

const Education: React.FC = () => {

	return (
		<IonPage>
			<TopBar title={title} />

			<IonContent >
				<TopBarFullscreen title={title} />
				<div className="education-page">
					<div className="summary">
						<h3 className="school-name">{EDUCATION_INFO.schoolName}</h3>
						<div className="degree">
							{EDUCATION_INFO.degree} with {EDUCATION_INFO.distinction}
						</div>
						<div className="duration">
							{EDUCATION_INFO.start} - {EDUCATION_INFO.end}
						</div>
						<UnorderedList items={EDUCATION_INFO.highlights}/>
					</div>
					<div className="courses-section">
						<h4 className="courses-header">{EDUCATION_INFO.coursesHeader}</h4>
						<div className="courses">
							{EDUCATION_INFO.coures.map((course, i) => <CourseEntry
								key={i}
								title={course.title}
								grade={course.grade}
								average={course.average}
								highlights={course.highlights}
								summary={course.summary}/>)}
						</div>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Education;
