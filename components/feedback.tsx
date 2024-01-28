import { Widget } from "@typeform/embed-react";

export default function Feedback({ id }: { id: string }) {
  const widgetContainerStyle = {
    width: "auto",
    height: "100vh",
  };
  return (
    <main>
      <Widget id={id} style={widgetContainerStyle} />
    </main>
  );
}
