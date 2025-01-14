'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { ScrollDown, SectionTitle } from '@shared/ui';
import { Wrapper } from './fourth-section.styled';
import { Projects } from './ui';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN, TOP_NUMBER } from './constants';

export const FourthSection: FC = () => {
  const t = useTranslations('FourthSection.ScrollDown');
  const f = useTranslations(`FourthSection.FourthSectionTitle`);

  const title = f('text');
  const sectionText = t('text');

  return (
    <Wrapper data-testid='fourth-section' id='fourth-section'>
      <SectionTitle title={ title } topNumber={ TOP_NUMBER } />
      <Projects />
      <ScrollDown
        customStyles={ CUSTOM_STYLES_SCROLL_DOWN }
        sectionNumber={ SECTION_NUMBER_SCROLL_DOWN }
        sectionText={ sectionText }
      />
    </Wrapper>
  );
};
