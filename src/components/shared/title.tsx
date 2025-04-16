export default function Title({
  children,
}: {
  children: React.ReactNode | string;
}) {
  return <h1 className="lg:text-4xl text-2xl font-semibold mb-8">{children}</h1>;
}
