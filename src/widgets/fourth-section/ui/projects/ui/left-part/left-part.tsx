'use client';

import { FC, ReactElement, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import { MusicOnProjectIcon, LinkifyIcon, VTBIcon } from '@shared/ui';
import {
  Wrapper,
  TitleWrapper,
  Title,
  IconWrapper,
  Seperator,
  SeperatorWrapper,
  Example,
  CardWrapper,
  InfoSection,
  CardBody,
  Description,
  AnimatedCarusel,
  StyledImage,
  Badge,
  BlinkingStatus,
  TopNumber,
} from './left-part.styled';
import { Props } from './types';
import { Panels } from './ui';

export const LeftPart: FC<Props> = ({ absoluteRef, overlappingType }) => {
  const refCardBody = useRef<HTMLDivElement | null>(null);
  const [isPaused, setisPaused] = useState<boolean>(false);
  const t = useTranslations(`FourthSection.FourthSectionProjects.FourthSectionLeftPart`);

  const customStylesCarusel = `width: ${refCardBody.current?.clientWidth}px;`;
  const conditionalSvg: { [key in typeof overlappingType]: ReactElement } = {
    vtb: <VTBIcon />,
    musicon: <MusicOnProjectIcon />,
    linkify: <LinkifyIcon />,
  };
  const text = t(`${overlappingType}`);

  const onHover = () => setisPaused(true);
  const onLeave = () => setisPaused(false);

  return (
    <Wrapper data-testid='left-part'>
      <CardWrapper>
        <CardBody ref={ refCardBody }>
          <Panels />
          <InfoSection>
            <TopNumber>
              0{overlappingType === 'linkify' ? 1 : overlappingType === 'musicon' ? 2 : 3}
            </TopNumber>
            <TitleWrapper>
              <IconWrapper overlappingType={ overlappingType }>
                {conditionalSvg[overlappingType]}
              </IconWrapper>
              <Title title={ text }>{text}</Title>
              <Badge
                title={
                  overlappingType === 'linkify'
                    ? 'Social app'
                    : overlappingType === 'musicon'
                      ? 'Music app'
                      : 'Cash management'
                }
              >
                {overlappingType === 'linkify'
                  ? 'Social app'
                  : overlappingType === 'musicon'
                    ? 'Music app'
                    : 'Cash management'}
                <BlinkingStatus
                  isActive={ overlappingType === 'vtb' }
                  title={ overlappingType === 'vtb' ? 'Active' : 'Inactive' }
                />
              </Badge>
            </TitleWrapper>
            <TitleWrapper>
              <Title title={ text }>
                {overlappingType === 'linkify'
                  ? 'Social network'
                  : overlappingType === 'musicon'
                    ? 'Music player'
                    : 'Cash management'}
              </Title>
            </TitleWrapper>
            <Description>
              Here might be your information. This project is about this. Hello daga bugag dasdas.
              Dkklasd asdasddasd.
            </Description>
          </InfoSection>
        </CardBody>
        <Example>
          <AnimatedCarusel
            caruselType='left'
            customStyles={ customStylesCarusel }
            isPaused={ isPaused }
            onMouseEnter={ onHover }
            onMouseLeave={ onLeave }
          >
            <span>
              <li>Linkify</li>
              <li>Projects</li>
              <li>Social</li>
              <li>Network</li>
            </span>
            <span>
              <li>Linkify</li>
              <li>Projects</li>
              <li>Social</li>
              <li>Network</li>
            </span>
          </AnimatedCarusel>
          <AnimatedCarusel
            caruselType='right'
            customStyles={ customStylesCarusel }
            isPaused={ isPaused }
          >
            <span>
              <li>Linkify</li>
              <li>Projects</li>
              <li>Social</li>
              <li>Network</li>
            </span>
            <span>
              <li>Projects</li>
              <li>Social</li>
              <li>Network</li>
              <li>Linkify</li>
            </span>
          </AnimatedCarusel>
        </Example>
      </CardWrapper>
      <SeperatorWrapper>
        <Seperator>
          <IconWrapper ref={ absoluteRef } overlappingType={ overlappingType } isCenterWrapper>
            {conditionalSvg[overlappingType]}
          </IconWrapper>
        </Seperator>
      </SeperatorWrapper>
      <StyledImage alt='background' height={ 1200 } src='/images/background.png' width={ 1200 } />
    </Wrapper>
  );
};
