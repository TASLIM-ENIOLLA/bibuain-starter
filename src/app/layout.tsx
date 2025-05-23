import "@/css/global.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Bibuain Starter",
  description: "Developed by Taslim Eniolla",
};