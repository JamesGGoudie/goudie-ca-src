import React from 'react';

import { UnorderedListProps } from 'src/properties';

import './UnorderedList.scss';

const UnorderedList: React.FC<UnorderedListProps> = (
	{ items }: UnorderedListProps
) => {
	return (
		<div>
			{items && items.length > 0 ? (<ul>
				{items.map((item, i) => <li key={i}>{item}</li>)}
			</ul>) : null
			}
		</div>
	);
};

export default UnorderedList;
