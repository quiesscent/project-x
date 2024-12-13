export default function BlogDetails({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <div className="inline-block">
        {children}
      </div>
    </section>
  );
}