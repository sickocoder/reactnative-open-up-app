import styled from 'styled-components/native';
import { availableStyles, simpleStyles } from './box-styles/mappers';
import { BoxProps } from './box.types';

const mapPropToStyle = (props: Record<string, any>) =>
  Object.keys(props)
    .map((prop) => {
      const isSimpleStyle = simpleStyles[prop];

      if (isSimpleStyle) {
        return availableStyles.makeSimpleStyle(prop, props[prop]);
      }

      const styleFunction = availableStyles[prop];
      const isPropBoolean = typeof prop === 'boolean';

      if (props[prop] && styleFunction) {
        return isPropBoolean ? styleFunction() : styleFunction(props[prop]);
      }
      return ``;
    })
    .join('');

// eslint-disable-next-line import/prefer-default-export
export const BoxView = styled.View<BoxProps>`
  ${(props) => mapPropToStyle(props)}
`;
