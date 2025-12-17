import { ClientPageHeader } from "~/components/ClientPageHeader";

export default function SubpagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientPageHeader />
      {children}
    </>
  );
}
