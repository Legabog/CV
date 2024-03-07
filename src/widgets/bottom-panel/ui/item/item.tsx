import { FC } from 'react';

import { Wrapper, A } from './item.styled';

export const Item: FC<Omit<Icon.Props, 'id'>> = ({ Icon, tooltip }) => (
	<Wrapper data-testid='item'>
		<A title={ tooltip }>
			<Icon />
		</A>
	</Wrapper>
);
