import { trpc } from '../../lib/trpc';

export const LessonsPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getLessons.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!data) {
    // ← Новая проверка
    return <span>No data found</span>;
  }

  return (
    <div>
      <h1>Credu</h1>
      {data.lessons.map((lesson) => {
        return (
          <div key={lesson.nick}>
            <h2>{lesson.name}</h2>
            <p>{lesson.description}</p>
          </div>
        );
      })}
    </div>
  );
};
