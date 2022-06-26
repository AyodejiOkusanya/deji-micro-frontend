import React from "react";

export const Kanban = () => {
  const handleOnDrag = () => {};
  const handleOnDrop = () => {};
  const handleDrapOver = (e: any) => e.preventDefault();
  return (
    <div className="kanban" aria-labelledby="kanbanTitle">
      <h1 id="kanbanTitle">Kanban Board</h1>
      <section className="kanban__todo">
        <ul
          draggable={true}
          onDrag={handleOnDrag}
          onDrop={handleOnDrop}
          onDragOverCapture={handleDrapOver}
        ></ul>
      </section>
      <section className="kanban__inProgress"></section>
      <section className="kanban__done"></section>
    </div>
  );
};
