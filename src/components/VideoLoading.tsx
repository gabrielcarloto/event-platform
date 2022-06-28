import Loading from './Loading';

export default function VideoLoading() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Loading />
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <Loading tailwindClasses="h-6" />
            <Loading tailwindClasses="h-20 mt-4" />

            <div className="flex items-center gap-4 mt-6">
              <Loading tailwindClasses="h-16 w-16 rounded-full" />

              <div className="flex flex-col gap-1">
                <Loading tailwindClasses="h-6 w-48" />
                <Loading tailwindClasses="h-4 w-96" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Loading tailwindClasses="h-14 w-60 p-4 rounded" />
            <Loading tailwindClasses="h-14 w-60 p-4 rounded" />
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <Loading tailwindClasses="h-28 rounded" />
          <Loading tailwindClasses="h-28 rounded" />
        </div>
      </div>
    </div>
  );
}
