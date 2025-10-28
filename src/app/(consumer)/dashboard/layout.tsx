export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="z-1 h-screen overflow-scroll">{children}</div>;
}
