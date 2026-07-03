import { CloudLayer } from '../components/CloudLayer'
import { NavButton } from '../components/NavButton';

const HomePage = () => {
  return (
    <>
      <div id="background" className="relative overflow-hidden bg-blue-900 w-screen h-screen z-0">
        {/* Clouds */}
        <CloudLayer/>

        <div id="main-container" className="absolute inset-0 flex flex-col gap-16 items-center justify-center z-10">
          <div className="w-1/6 h-1/6 bg-black/50 p-8 rounded-lg">
            <h1 className="opacity-100 text-white text-4xl font-semibold z-10 text-center"> Welcome to mai website</h1>

          </div>
          <NavButton to='/profile/cafe' text='Enter'/>
        </div>
      </div>


    </>
  );
}

export { HomePage }