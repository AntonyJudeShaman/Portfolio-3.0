import Head from "next/head";
import { Card, CardContent, CardTitle } from "./ui/card";

function Tool({ title, children }) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default function Tools() {
  return <></>;
}
