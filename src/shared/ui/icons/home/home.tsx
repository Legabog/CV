import { FC } from 'react';

import { StyledSvg } from '@shared/ui';

export const HomeIcon: FC = () => (
  <StyledSvg
    data-testid='home-icon-svg'
    height='24'
    viewBox='0 0 60 60'
    width='24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M54.6292 51.1742L32.2667 18.5961L39.6517 6.28685L35.3642 3.71451L30.0067 12.639L24.6492 3.71451L20.3667 6.28935L27.7517 18.5961L5.38919 51.1742C4.90919 51.9466 4.88169 52.9166 5.32419 53.7115C5.76419 54.5065 6.60169 54.999 7.51169 54.999H22.5117V49.9992C22.5117 45.8595 25.8692 42.4997 30.0117 42.4997C34.1542 42.4997 37.5117 45.8595 37.5117 49.9992V54.999H52.5117C53.4192 54.999 54.2567 54.5065 54.6992 53.7115C55.1367 52.9166 55.1092 51.9466 54.6292 51.1742Z'
      data-testid='home-icon-path'
    />
  </StyledSvg>
);
