import React from 'react';

export const CompleteTaskList = (props) => {
  const { completeTasks, onClickInComplete } = props;
  return (
    <div className="completeTaskList">
      <h2>完了リスト</h2>
      <ul>
        {completeTasks.map((task, index) => (
          <li key={index}>
            <p>{task.taskText}</p>
            <div className="buttons">
              <button className="start" onClick={() => onClickInComplete(index)}>
                戻す
              </button>
            </div>
            <p className="taskList-taskDate">完了日：{task.taskDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
