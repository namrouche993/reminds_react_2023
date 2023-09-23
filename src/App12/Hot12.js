import React, { useRef, useState, useEffect } from 'react';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';

function Hot12() {
  const hotContainer = useRef(null);

  useEffect(() => {
    const hot = new Handsontable(hotContainer.current, {
      data: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      colHeaders: true,
      rowHeaders: true,
      persistentState: true,
    });


    hot.addHook('afterChange',(changes, source)=>{
      hot.getPlugin('persistentState').saveValue('lastData',hot.getData())
    })

    return () => {
      hot.destroy();
    };
  }, []);

  return (
    <div>
      <div ref={hotContainer}></div>
    </div>
  );
};

export default Hot12;
