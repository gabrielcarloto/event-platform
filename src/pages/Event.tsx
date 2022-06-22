import Header from '../components/Header';
import Player from '../components/Player';
import Sidebar from '../components/Sidebar';

export default function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Sidebar />
      </main>
    </div>
  );
}
