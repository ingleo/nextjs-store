export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Store navigation</nav>
      {children}
    </main>
  );
}
