import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { PlaywrightIcon } from './playwright';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <PlaywrightIcon />
  </CombineMocks>
);

describe('PlaywrightIcon Component', () => {
  test('Test PlaywrightIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test PlaywrightIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('playwright-icon-svg');
    expect(svgElement).toHaveAttribute('height', '48');
    expect(svgElement).toHaveAttribute('width', '48');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 256 192');
  });

  test('Test PlaywrightIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const firstPathElement = getByTestId('playwright-icon-path-1');
    const secondPathElement = getByTestId('playwright-icon-path-2');
    const thirdPathElement = getByTestId('playwright-icon-path-3');
    const fourthPathElement = getByTestId('playwright-icon-path-4');
    const fifthPathElement = getByTestId('playwright-icon-path-5');

    expect(firstPathElement.getAttribute('d')).toContain(
      'M103.081 138.565v-16.637l-46.223 13.108s3.415-19.846 27.522-26.684c7.311-2.072 13.549-2.058 18.701-1.063V39.05h23.145c-2.52-7.787-4.958-13.782-7.006-17.948c-3.387-6.895-6.859-2.324-14.741 4.269c-5.552 4.638-19.583 14.533-40.698 20.222c-21.114 5.694-38.185 4.184-45.307 2.95c-10.097-1.742-15.378-3.96-14.884 3.721c.43 6.774 2.043 17.277 5.74 31.148c7.996 30.039 34.424 87.92 84.37 74.468c13.046-3.515 22.254-10.464 28.637-19.32h-19.256zm-74.588-54.74l35.494-9.35s-1.034 13.654-14.34 17.162c-13.31 3.504-21.154-7.812-21.154-7.812',
    );
    expect(secondPathElement.getAttribute('d')).toContain(
      'M236.664 39.84c-9.226 1.617-31.361 3.632-58.716-3.7c-27.363-7.328-45.517-20.144-52.71-26.168c-10.197-8.54-14.682-14.476-19.096-5.498c-3.902 7.918-8.893 20.805-13.723 38.846c-10.466 39.066-18.289 121.505 46.413 138.853c64.687 17.333 99.126-57.978 109.593-97.047c4.83-18.037 6.948-31.695 7.53-40.502c.665-9.976-6.187-7.08-19.29-4.784M106.668 72.161s10.196-15.859 27.49-10.943c17.305 4.915 18.645 24.046 18.645 24.046zm42.215 71.163c-30.419-8.91-35.11-33.167-35.11-33.167l81.714 22.846c0-.004-16.494 19.12-46.604 10.32m28.89-49.85s10.183-15.847 27.474-10.918c17.29 4.923 18.651 24.054 18.651 24.054z',
    );
    expect(thirdPathElement.getAttribute('d')).toContain(
      'm86.928 126.51l-30.07 8.522s3.266-18.609 25.418-25.983L65.25 45.147l-1.471.447c-21.115 5.694-38.185 4.184-45.307 2.95c-10.097-1.741-15.379-3.96-14.885 3.722c.43 6.774 2.044 17.276 5.74 31.147c7.997 30.039 34.425 87.92 84.37 74.468l1.471-.462zM28.493 83.825l35.494-9.351s-1.034 13.654-14.34 17.162c-13.31 3.504-21.154-7.811-21.154-7.811',
    );
    expect(fourthPathElement.getAttribute('d')).toContain(
      'm150.255 143.658l-1.376-.335c-30.419-8.91-35.11-33.166-35.11-33.166l42.137 11.778l22.308-85.724l-.27-.07c-27.362-7.329-45.516-20.145-52.71-26.17c-10.196-8.54-14.682-14.475-19.096-5.497c-3.898 7.918-8.889 20.805-13.719 38.846c-10.466 39.066-18.289 121.505 46.413 138.852l1.326.3zM106.668 72.16s10.196-15.859 27.49-10.943c17.305 4.915 18.645 24.046 18.645 24.046z',
    );
    expect(fifthPathElement.getAttribute('d')).toContain(
      'm88.46 126.072l-8.064 2.289c1.906 10.74 5.264 21.047 10.534 30.152c.918-.202 1.828-.376 2.762-.632c2.449-.66 4.72-1.479 6.906-2.371c-5.89-8.74-9.785-18.804-12.137-29.438m-3.148-75.644c-4.144 15.467-7.852 37.73-6.831 60.06c1.826-.793 3.756-1.532 5.9-2.14l1.492-.334c-1.82-23.852 2.114-48.157 6.546-64.694a323 323 0 0 1 3.373-11.704a105 105 0 0 1-5.974 3.547a307 307 0 0 0-4.506 15.265',
    );
  });
});
