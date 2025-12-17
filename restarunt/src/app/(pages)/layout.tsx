import SubHero from "~/components/SubHero";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubHero />
      {children}
    </>
  );
}
