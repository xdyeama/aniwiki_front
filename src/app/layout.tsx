import Header from "@/components/Header";
import "@/app/globals.css"; // Import global styles (if any)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
