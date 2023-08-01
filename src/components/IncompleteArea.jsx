import React, { useState } from 'react';

const style = {
  backgroundColor: '#c6ffe2',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px'
}

export const IncompleteArea = (props) => {
    const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
    <p className='title'>未完了のTODO</p>
    <ol>
      {todos.map((todo, index) => (
      <div key={todo} className='list-row'>
        <li>{todo}</li>
        <button onClick={() => onClickComplete(index)}>完了</button>
        <button onClick={() => onClickDelete(index)}>削除</button>
      </div>
      ))}
    </ol>
    </div>
  )
}

