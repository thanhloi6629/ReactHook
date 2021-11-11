/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useCallback, useEffect } from 'react'
import { css, jsx } from '@emotion/core';
import BodyText from 'components/atoms/BodyText';
import Icon from 'components/atoms/Icon';
import { grayScale, textFontSize, utilityColor } from 'components/styles';

const styles = {
  wrapper: css({
    width: '100%',
    margin: '16px 0 16px 0',
  }),
  content: css({
    display: 'block',
    marginBottom: '15px',
    backgroundColor: utilityColor.white,
    border: `1px solid ${grayScale.gray20}`,
  }),
  button: css({
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    padding: '15px 0px',
    fontFamily: 'inherit',
    text: textFontSize.re,
    minWidth: '140px',
    width: '100%',
    textAlign: 'left',
    backgroundColor: '#007BC3',
    display: 'flex',
    alignItems: 'center',
  }),
  hidden: css({
    display: 'none',
  }),
  label: css({
    fontSize: '16px',
    color: 'white',
    fontWeight: 'bold',
  }),
};

interface AccordionProps {
  text: string;
  color: string;
  defaultExpand?: boolean; 
  isHidden?: boolean;
  callBack: () => void;
}

const  Accordion: React.FC<AccordionProps> = ({children, text, color, defaultExpand, callBack, isHidden}) => {
  const [isExpand, setExpand] = React.useState(defaultExpand);

  const onClick = useCallback(() => {
    setExpand(!isExpand);
    callBack();
    },[isExpand, callBack],
  )


//  const onClick = (() =>{
//     setExpand(!isExpand);
//  })


  return (
    <React.Fragment>
        <button type="button"  onClick={onClick}>
          {
            isExpand ? <Icon type="chevronUp" color={color} size="15px" margin="0 20px 0 15px" verticalAlign="middle" /> 
            : <Icon type="chevronDown" color={color} size="15px" margin="0 20px 0 15px" verticalAlign="middle" />
          }
          <BodyText customStyle={styles.label}>{text}</BodyText>
        </button>
        <div css={css(styles.content, !isExpand? styles.hidden: '' )}>
          {children}
        </div>
    </React.Fragment>
  )
}

export default Accordion
