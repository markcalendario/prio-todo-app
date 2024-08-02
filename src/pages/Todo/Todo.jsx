import Content from "@/layouts/Dashboard/Content/Content.jsx";
import Dashboard from "@/layouts/Dashboard/Dashboard.jsx";
import Main from "@/layouts/Dashboard/Main/Main.jsx";

export default function Todo() {
  return (
    <Dashboard>
      <Main>
        <Content
          title="Pending Tasks"
          description="List of tasks you need to finish."></Content>
      </Main>
    </Dashboard>
  );
}
