import { EducationInfo } from 'src/interfaces';

export const EDUCATION_INFO: EducationInfo = {
	schoolName: 'University of Toronto Scarborough',
	degree: 'Honours Bachelor of Science',
	distinction: 'Distinction',
	start: 'September 2016',
	end: 'April 2020',
	highlights: [
		'Computer Science Co-op Program',
		'Specialized in Software Engineering',
		'Named to Dean\'s List years of 2019 and 2020',
		'Cumulative cGPA: 3.44 / 4.0',
		'Final Year GPA: 3.74 / 4.0',
	],
	coursesHeader: 'Notable Courses',
	coures: [
		{
			title: 'Programming on the Web',
			grade: 'A+',
			average: 'B+',
			summary: 'Building responsive web-applications including strong UI and backend design. Constructed a web application that allows users to build 3D structures with each other realtime.'
		},
		{
			title: 'Computer and Network Security',
			grade: 'A+',
			average: 'B+',
			summary: 'Studying computer network vulnerabilities. Wrote programs capable of using these vulnerabilities when they are present. Learned how to write applications capable of avoiding these vulnerabilities.'
		},
		{
			title: 'Computer Graphics',
			grade: 'A',
			average: 'B-',
			summary: 'Focus on different implementations of graphics engines capable of rendering complex scenes. Construced path tracing and ray tracing renderers using C. Renderers capable of processing shadows, colours, reflection, refraction, and more.'
		},
		{
			title: 'Database System Technology',
			grade: 'A',
			average: '*',
			summary: 'Low-level look at database implementations. Covered storage, searching, sorting, and query optimization. Modified PostgreSQL C source code to test different implementations of features.'
		},
		{
			title: 'Compiler Optimization',
			grade: 'A',
			average: 'B-',
			summary: 'Examined optimization techniques of modern compilers and their implementations. Wrote optimizations using C++ and LLVM Grew an understanding and appreciation that compilers are only capable of doing so much optimization themselves.'
		},
		{
			title: 'Social and Information Networks',
			grade: 'A+',
			average: 'B+',
			summary: 'Graph theory course that covers advanced subjects. Studied the applications of Graph Paritioning, Signed Networks, and Game Theory. Learned how graph theory is used to examine the voting, epidemics, and the architecture of the Internet.'
		},
		{
			title: 'Algorithm Design and Analysis',
			grade: 'A-',
			average: 'C+',
			summary: 'Building techniques of analyzing problems to build optimal algorithms. Revolved around Greedy, Divide and Conquer, and Dynamic Programming algorithms. Learned to identify the ideal type of algorithm to use and build a correct solution.'
		},
		{
			title: 'Computability and Computational Complexity',
			grade: 'A-',
			average: 'C+',
			summary: 'Theory heavy course focused on analyzing and building complex programs. Topics included Computable Functions, Polytime Reductions, and NP-Completeness. Complicated course content that effectively challenged my expertise in computer science.'
		},
		{
			title: 'Social Impact of Information Technology',
			grade: 'A',
			average: 'B+',
			summary: 'Research paper oriented course for learning about the affects of technology on society. Wrote weekly papers and gave three presentations to class. Final paper covered the affects of automation on the workforce throughout the last century and how is may continue.'
		}
	]
};
