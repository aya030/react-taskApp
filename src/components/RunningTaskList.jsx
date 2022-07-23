export const RunningTaskList = (props) => {
  const { runningTasks, onClickBack, onClickComplete } = props;
  return (
    <div className="runningTaskList">
      <h2>実行中リスト</h2>
      <ul>
        {runningTasks.map((task, index) => (
          <li key={index}>
            <p>{task.taskText}</p>
            <div className="buttons">
              <button className="back" onClick={() => onClickBack(index)}>
                戻す
              </button>
              <button className="complete" onClick={() => onClickComplete(index)}>
                完了
              </button>
            </div>
            <p className="taskList-taskDate">完了日：{task.taskDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
