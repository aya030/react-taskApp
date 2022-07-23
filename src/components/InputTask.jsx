export const InputTask = (props) => {
  const { taskText, onChangeTaskText, onChangeTaskDate, onClick } = props;
  return (
    <div className="inputTask">
      <label htmlFor="taskText" className="inputTask-label">
        ＊新規のタスクを入力
      </label>
      <input
        id="taskText"
        className="inputTask-input"
        type="text"
        placeholder="NewTaskText"
        value={taskText}
        onChange={onChangeTaskText}
      />
      <label htmlFor="taskDate" className="inputTask-label">
        ＊タスク完了日
      </label>
      <input id="taskDate" className="inputTask-input" type="date" onChange={onChangeTaskDate} />
      <button className="inputTask-addButton" onClick={onClick}>
        新規追加
      </button>
    </div>
  );
};
