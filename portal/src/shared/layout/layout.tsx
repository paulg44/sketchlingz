import SharedSidebar from '../sidebar/navbar';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen overflow-hidden'>
      <SharedSidebar />
      <main className='ml-54 h-full overflow-hidden'>{children}</main>
    </div>
  );
};

export default SharedLayout;
