export default function RenderTasks({
  tasks,
  onEditSuccess,
  onSetToPendingSuccess,
  onDeleteSuccess,
  onFinishSuccess
}) {
  const renderTasks = () => {
    if (!tasks.length) {
      return (
        <EmptySection title="Wohoo!" description="Take some time to rest." />
      );
    }

    return tasks.map((task) => (
      <TaskCard
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
        targetDate={task.targetDate}
        onEditSuccess={onEditSuccess}
        onSetToPendingSuccess={onSetToPendingSuccess}
        onDeleteSuccess={onDeleteSuccess}
        onFinishSuccess={onFinishSuccess}
      />
    ));
  };

  return <div className="tasks">{renderTasks()}</div>;
}
