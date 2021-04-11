import { OnlinePresenceProps } from 'src/properties';

export const ONLINE_PRESENCE_INFO: OnlinePresenceProps[] = [
	{
		title: 'GitHub',
		subtitle: 'View my Work',
		mainContent: 'Would you like to see some of my code? I have some public repositories on my GitHub. My university repositories are all private, but I may grant you access if asked.',
		anchorHref: 'https://github.com/JamesGGoudie',
		anchorText: 'GitHub'
	},
	{
		title: 'Email',
		subtitle: 'Message Me',
		mainContent: 'If you would like to directly make contact, you may email me at this address:',
		anchorHref: 'mailto:james.g.goudie@gmail.com',
		anchorText: 'james.g.goudie@gmail.com'
	},
	{
		title: 'LinkedIn',
		subtitle: 'Hire Me',
		mainContent: 'Are you looking for a strong software developer? Send me a message on LinkedIn and I\'ll try to respond in a reasonable timeframe.',
		anchorHref: 'https://www.linkedin.com/in/jamesggoudie',
		anchorText: 'LinkedIn'
	}
];
