export const NewTaskList = (props) => {
  const { newTasks, onClickStart, onClickDelete } = props;
  return (
    <div className="newTaskList">
      <h2>新規リスト</h2>
      <ul>
        {newTasks.map((task, index) => (
          <li key={index}>
            <p>{task.taskText}</p>
            <div className="buttons">
              <button className="start" onClick={() => onClickStart(index)}>
                開始
              </button>
              <button className="delete" onClick={() => onClickDelete(index)}>
                削除
              </button>
            </div>
            <p className="taskList-taskDate">完了日：{task.taskDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
