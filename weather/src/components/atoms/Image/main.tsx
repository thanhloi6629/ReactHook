/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react';
import { StyleProps } from 'types/StyleProps';

type TmageProps = {
  src: string;
  alt?: string | undefined;
  styleProps?: StyleProps | undefined;
};
const styles = {
  with: '100%',
  height: '100%',
  objectfit: 'covert',
};

const Image: React.FC<TmageProps> = ({ src, alt = '', styleProps = {} }): ReactElement<HTMLImageElement> => <img src={src} alt={alt} style={{ ...styles, ...styleProps }} />;

export default Image;
