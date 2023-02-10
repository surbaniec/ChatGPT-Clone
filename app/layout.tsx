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
          {/* sidebar */}
          {/* toast */}
          <div className='bg-[#343551] flex-1'>{children}</div>
        </div>
      </body>
    </html>
  );
}
