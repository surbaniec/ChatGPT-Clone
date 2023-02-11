import Sidebar from '@/components/Sidebar';
import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';
import { SessionProvider } from '@/components/SessionProvider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                <Sidebar />
              </div>

              {/* toast */}
              <div className='bg-[#343551] flex-1'>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
