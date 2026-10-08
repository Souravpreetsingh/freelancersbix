/** Admin area wrapper. Authorization happens in the (secure) segment layout. */

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
