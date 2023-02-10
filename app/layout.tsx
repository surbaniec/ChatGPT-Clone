import Sidebar from '@/components/Sidebar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <div className='flex'>
          <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
            <Sidebar />
          </div>

          {/* toast */}
          <div className='bg-[#343551] flex-1'>{children}</div>
        </div>
      </body>
    </html>
  );
}
