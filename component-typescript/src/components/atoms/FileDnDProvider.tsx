import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
// import  {HTML5Backend}  from 'react-dnd-html5-backend'

const FileDnDProvider: React.FC = ({ children }) => (
  <DndProvider backend={Backend}>
    {children}
  </DndProvider>
);

export default FileDnDProvider;
