import { CloudLayer } from '../components/CloudLayer'
const HomePage = () => {
  return (
    <>
      <div id="background" className="relative overflow-hidden bg-blue-900 w-screen h-screen z-0">
        {/* Clouds */}
        <CloudLayer/>

        <div id="main-container" className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-1/2 h-1/2 bg-black/20 p-32">
            <h1 className="opacity-100 text-white text-4xl font-semibold z-10"> This is the dashboard </h1>
          </div>
        </div>
      </div>


    </>
  );
}

export { HomePage }