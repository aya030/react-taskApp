import { useState } from 'react';
import '../App.css';
import { Header } from '../components/Header';
import { InputTask } from '../components/InputTask';
import { NewTaskList } from '../components/NewTaskList';
import { RunningTaskList } from '../components/RunningTaskList';
import { CompleteTaskList } from '../components/CompleteTaskList';
import toast, { Toaster } from 'react-hot-toast';

export const TaskApp = () => {
  const [taskText, setTaskText] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [newTasks, setNewTasks] = useState([
    {
      taskText: 'B社企業研究',
      taskDate: '2022-07-28',
    },
    {
      taskText: 'C社メール返信',
      taskDate: '2022-07-30',
    },
  ]);

  const [runningTasks, setRunningTasks] = useState([
    {
      taskText: 'A社面談準備',
      taskDate: '2022-08-01',
    },
    {
      taskText: 'D社履歴書作成・送付',
      taskDate: '2022-08-20',
    },
  ]);

  const [completeTasks, setCompleteTasks] = useState([
    {
      taskText: 'ポートフォリオの作成',
      taskDate: '2022-08-01',
    },
  ]);

  const onChangeTaskText = (e) => setTaskText(e.target.value);
  const onChangeTaskDate = (e) => setTaskDate(e.target.value);

  const onClickAdd = () => {
    if (taskText === '') return;
    if (taskDate === '') return;
    const newTaskList = [...newTasks, { taskText, taskDate }];
    setNewTasks(newTaskList);
    setTaskText('');
    setTaskDate('');
    toast('Create New Task!!!');
  };

  const onClickStart = (index) => {
    const newTaskList = [...newTasks];
    newTaskList.splice(index, 1);
    setNewTasks(newTaskList);

    const newRunningTasks = [...runningTasks, newTasks[index]];
    setRunningTasks(newRunningTasks);

    toast('タスクを開始しました！');
  };

  const onClickDelete = (index) => {
    const newTaskList = [...newTasks];
    newTaskList.splice(index, 1);
    setNewTasks(newTaskList);

    toast('タスクを削除しました');
  };

  const onClickBack = (index) => {
    const newRunningTasks = [...runningTasks];
    newRunningTasks.splice(index, 1);
    setRunningTasks(newRunningTasks);

    const newTaskList = [...newTasks, runningTasks[index]];
    setNewTasks(newTaskList);

    toast('新規リストに戻しました');
  };

  const onClickComplete = (index) => {
    const newRunningTasks = [...runningTasks];
    newRunningTasks.splice(index, 1);
    setRunningTasks(newRunningTasks);

    const newCompleteTasks = [...completeTasks, runningTasks[index]];
    setCompleteTasks(newCompleteTasks);

    toast('タスクを完了しました');
  };

  const onClickInComplete = (index) => {
    const newCompleteTasks = [...completeTasks];
    newCompleteTasks.splice(index, 1);
    setCompleteTasks(newCompleteTasks);

    const newRunningTasks = [...runningTasks, completeTasks[index]];
    setRunningTasks(newRunningTasks);

    toast('実行中リストに戻しました');
  };

  return (
    <>
      <Header />
      <InputTask
        taskText={taskText}
        taskDate={taskDate}
        onChangeTaskText={onChangeTaskText}
        onChangeTaskDate={onChangeTaskDate}
        onClick={onClickAdd}
      />
      <div className="taskList">
        <NewTaskList
          newTasks={newTasks}
          onClickStart={onClickStart}
          onClickDelete={onClickDelete}
        />
        <RunningTaskList
          runningTasks={runningTasks}
          onClickBack={onClickBack}
          onClickComplete={onClickComplete}
        />
        <CompleteTaskList completeTasks={completeTasks} onClickInComplete={onClickInComplete} />
      </div>
      <Toaster />
    </>
  );
};
