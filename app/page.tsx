export default function Home() {
  return (
    <>
      <h1 className="align text-center text-xl font-bold tracking-wide my-5 ">
        Welcome to Task Manager
      </h1>
      <p className="px-8">
        Task Manager is made for helping the organization of todo lists by
        gruping them into projects, providing statistics of progress, and time
        spent on a given task. To create a new project, go to the side bar and
        click the{" "}
        <code className="bg-[rgba(50,50,50,1)] tracking-tight underline px-2">
          + Add Project
        </code>{" "}
        button. Then you can start listing the necessary steps needed to
        complete the project.
      </p>
    </>
  );
}
