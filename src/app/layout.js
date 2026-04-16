import "../styles/globals.css";

export const metadata = {
  title: "Jabbama Travels & Tours",
  description: "Global Travel Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
