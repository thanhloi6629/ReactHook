import React, { useEffect } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

type FileDnDBoxProps = {
  onDrop: (props: FileDnDBoxProps, monitor: DropTargetMonitor) => void
}

const FileDnDBox: React.FC<FileDnDBoxProps & {
  setActive: (isActive: boolean) => void
  fullWidth?: boolean
}> = ({
  onDrop, setActive, children, fullWidth,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop(item, monitor) {
      if (onDrop) {
        onDrop({ onDrop }, monitor);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  useEffect(() => {
    setActive(canDrop && isOver);
  }, [canDrop, isOver, setActive]);
  return (
    <div ref={drop} style={fullWidth ? { width: '100%' } : {}}>
      {children}
    </div>
  );
};

export default FileDnDBox;
