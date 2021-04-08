import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonPage } from '@ionic/react';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import './Home.scss';

const title = 'Home';

const Home: React.FC = () => {

	return (
		<IonPage>
			<TopBar title={title} />

			<IonContent >
				<TopBarFullscreen title={title} />
				<div className="page">
					<div className="intro">
						<IonImg
							alt="Stunning, clean-shaven young man with kind eyes, clear skin,
									sparkling teeth, strong jaw, and a nice tuft of golden hair"
							src="assets/images/work-id.jpeg"/>
						<div>
							<p>
								Hello, stranger. My name is James Gabriel Goudie (rhymes with
								howdy). I am a software engineer from the shining city of
								Toronto, Ontario, Canada.
							</p>
							<p>
								This website is meant to serve as a portfolio of sorts. Right
								now, it only contains infromation related to my growing career
								as a software engineer. The long-term goal is to flush this out
								and make it feel more personal and less like a copy-and-paste
								template from SquareSpace. Check back for my review of
								Casablanca.
							</p>
							<p>
								I am seeking full-time, long-term employment with a worth-while
								company that will test my abilities and put my skills to good
								use. I enjoy challenges, but my current position doesn&#39;t
								stimulate me as much as I would like. If you are looking for
								a strong developer who actually enjoys learning, then feel free
								to reach out.
							</p>
							<p>
								I&#39;m also looking for a D&#38;D group to join.
							</p>
						</div>
					</div>
					<div className="online-presence">
						<IonCard>
							<IonCardHeader>
								<IonCardSubtitle>View my Work</IonCardSubtitle>
								<IonCardTitle>GitHub</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								Would you like to see some of my code? I have some public
								repositories on my <a
									href="https://github.com/JamesGGoudie">GitHub</a>.
								My university repositories are all private. I may grant you
								access if asked.
							</IonCardContent>
						</IonCard>
						<IonCard>
							<IonCardHeader>
								<IonCardSubtitle>Message Me</IonCardSubtitle>
								<IonCardTitle>Email</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								If you would like to directly make contact, you may email me
								at this address: <a href="mailto:james.g.goudie@gmail.com">
									james.g.goudie@gmail.com
								</a>
							</IonCardContent>
						</IonCard>
						<IonCard>
							<IonCardHeader>
								<IonCardSubtitle>Hire Me</IonCardSubtitle>
								<IonCardTitle>LinkedIn</IonCardTitle>
							</IonCardHeader>
							<IonCardContent>
								Are you interested in hiring me? Send me a message on <a
									href="https://www.linkedin.com/in/jamesggoudie/">
									LinkedIn
								</a> and I&#39;ll try to respond in a reasonable timeframe.
							</IonCardContent>
						</IonCard>
					</div>
					<div className="free-time-activities">
						<IonList>
							<IonListHeader>
								In my free time, I am most likely...
							</IonListHeader>
							<IonItem>
								<IonLabel>
									<span>Playing:</span> Star Wars Jedi: Fallen Order
								</IonLabel>
							</IonItem>
							<IonItem>
								<IonLabel>
									<span>Watching:</span> It&#39;s Always Sunny in Philadephia
								</IonLabel>
							</IonItem>
							<IonItem>
								<IonLabel>
									<span>Reading:</span> Jurassic Park by Michael Crichton
								</IonLabel>
							</IonItem>
						</IonList>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Home;
