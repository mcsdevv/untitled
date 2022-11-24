import "/styles/globals.css";
import "@tremor/react/dist/esm/tremor.css";

// * Components
import Header from "@components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
