import React, { useState } from 'react';
import { Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface IToolTipProps {
  id?: string;
  msg: string;
  children: React.ReactElement;
}

const useStyles = makeStyles({
  tooltipRoot: {
    color: '#ffffff'
  },
});

const ControlledTooltip: React.FC<IToolTipProps> = ({ id, msg, children }): React.ReactElement => {
  const classes = useStyles();
  const [openToolTip, setOpenToolTip] = useState<boolean>(false);
  const handleTooltipClose = () => {
    setOpenToolTip(false);
  };
  const handleTooltipOpen = () => {
    setOpenToolTip(true);
  };
  return (
    <div>
      <Tooltip
        id={id || 'demo tooltip'}
        title={msg || ''}
        open={openToolTip}
        onClose={handleTooltipClose}
        onOpen={handleTooltipOpen}
        classes={{ tooltip: classes.tooltipRoot }}
      >
        {children}
      </Tooltip>
    </div>
  );
};

export default ControlledTooltip;
