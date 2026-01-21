import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

export const metadata = {
  title: "Oxford Study Center",
  description: "Leading education institute with industry focused courses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsAppButton />
        <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
