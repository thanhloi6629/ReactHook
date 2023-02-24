import { Tooltip } from '@mui/material';
// eslint-disable-next-line import/named
import { GridCellParams } from '@mui/x-data-grid';
export const ToolTipCopy = ({ params }: { params: GridCellParams }) => {

  const copyToClipBoard = async (textCopy: string) => {
    try {
      await navigator.clipboard.writeText(textCopy);
      // successNotification('Copied!');
    } catch (err) {
      // errorNotification('Failed to copy!');
    }
  };

  return (
    <div
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      <Tooltip title={params.value}>
        <span>{params.value}</span>
      </Tooltip>
    </div>
  );
};
