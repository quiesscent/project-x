export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <div className="inline-block text-center justify-center">{children}</div>
    </section>
  );
}
