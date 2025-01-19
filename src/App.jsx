import { useState } from 'react'
import ImageComponent from './components/ImageComponents';
import VideoComponent from './components/videoComponents';
import ParagraphsComponent from './components/ParagraphComponents';
import ListsComponent from './components/ListsComponents';
function App() {
  return (
    <div>
      <h1>My React App</h1>
      <ImageComponent />
      <VideoComponent />
      <ParagraphsComponent />
      <ListsComponent />
    </div>
  );
}

export default App
