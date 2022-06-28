import Header from '../components/Header';
import Video from '../components/Video';
import Sidebar from '../components/Sidebar';
import { Navigate, useParams } from 'react-router-dom';
import { useGetFirstAvailableLessonQuery } from '../generated';

export default function Event() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    const { data, loading } = useGetFirstAvailableLessonQuery();

    if (!loading) {
      if (!data) return <Navigate replace to="/" />;

      const lessonSlug = data.lessons[0].slug;

      return <Navigate replace to={`/event/lesson/${lessonSlug}`} />;
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
