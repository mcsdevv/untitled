import "/styles/globals.css";

// * Components
import Header from "@components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <head />
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]">
        <Header />
        {children}
      </body>
    </html>
  );
}
