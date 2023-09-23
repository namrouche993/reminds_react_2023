import React, { useRef, useEffect } from 'react';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';

const Hottable = () => {
  const hotContainer = useRef(null);
  const persistentState = new Handsontable.plugins.PersistentState();

  useEffect(() => {
    const hot = new Handsontable(hotContainer.current, {
      data: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      colHeaders: true,
      rowHeaders: true,
      persistentState: true, // Enable persistent state
      plugins: [persistentState],
    });

    // Check if persistent state is enabled and enable the plugin
    const isPersistentStateEnabled = persistentState.isEnabled();
    if (isPersistentStateEnabled) {
      persistentState.enablePlugin();
    }

    return () => {
      hot.destroy();
    };
  }, [persistentState]);

  const handleSaveToLocalStorage = () => {
    const saveKey = 'exampleKey';
    persistentState.saveValue(saveKey, hotContainer.current.hotInstance.getData());
  };

  const handleLoadFromLocalStorage = () => {
    const loadKey = 'exampleKey';
    const savedData = persistentState.loadValue(loadKey);
    if (savedData) {
      hotContainer.current.hotInstance.loadData(savedData);
    }
  };

  const handleResetLocalStorage = () => {
    const resetKey = 'exampleKey';
    persistentState.resetValue(resetKey);
  };

  return (
    <div>
      <button onClick={handleSaveToLocalStorage}>Save to Local Storage</button>
      <button onClick={handleLoadFromLocalStorage}>Load from Local Storage</button>
      <button onClick={handleResetLocalStorage}>Reset Local Storage</button>
      <div ref={hotContainer}></div>
    </div>
  );
};

export default Hottable;
