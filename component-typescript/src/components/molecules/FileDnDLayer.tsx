import React, { useCallback } from 'react';
import { DropTargetMonitor } from 'react-dnd';

import FileDnDProvider from 'components/atoms/FileDnDProvider';
import FileDnDBox from 'components/atoms/FileDnDTarget';

const FileDnDLayer: React.FC<{
  setFile: (file: File) => void
  setActive: (isActive: boolean) => void
  fullWidth?: boolean
}> = ({
  children, setFile, setActive, fullWidth,
}) => {
  // DnD時の処理
  const onDrop = useCallback((item: any, monitor: DropTargetMonitor) => {
    if (monitor) {
      const  files  = monitor.getItem();
      setFile(files[0]);
    }
  }, [setFile]);

  return (
    <FileDnDProvider>
      <FileDnDBox
        onDrop={onDrop}
        setActive={setActive}
        fullWidth={fullWidth}
      >
        {children}
      </FileDnDBox>
    </FileDnDProvider>
  );
};

export default FileDnDLayer;
