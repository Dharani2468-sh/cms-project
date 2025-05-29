import { Link, Outlet } from "react-router-dom";

function BasicLayouts() {
    return (
        <>
            <header className="w-full bg-blue-400 text-white py-4 shadow-md flex flex-col sm:flex-row items-center justify-between px-6">
                <div className="text-2xl font-semibold flex items-center gap-2">
                    <Link to="/home" className="flex items-center gap-2">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/055/299/327/non_2x/white-paw-print-on-white-background-on-transparent-background-png.png"
                            alt="Paw Logo"
                            className="w-12 h-12"
                        />
                        <span>Pet Shop</span>
                    </Link>
                </div>
                <div className="mt-3 sm:mt-0 flex gap-3">
                    <Link to="/login" className="bg-blue-300 text-white px-4 py-2 rounded cursor-pointer">
                        sign-in
                    </Link>
                    <Link to="/sign-up" className="bg-white text-blue-600 px-4 py-2 rounded cursor-pointer">
                        sign-up
                    </Link>
                </div>
            </header>

            {/* Dog image on the left with styled text on the right */}
            <div className="flex items-center bg-white px-6 py-8">
                <img
                    src="https://clipart-library.com/new_gallery/221-2213497_english-mastiff-puppy-transparent-cute-dog-png.png"
                    alt="Cute Puppy"
                    className="w-40 h-auto mr-6"
                />

               <div className="flex-1 bg-blue-50 p-6 rounded-lg shadow-md font-serif">
  <h2 className="text-5xl font-extrabold text-blue-900 mb-4">ADOPT YOUR PETS</h2>
  <p className="text-lg text-blue-800 mb-2">
    🐾 Give a loving home to a furry friend in need.
  </p>
  <p className="text-lg text-blue-800 mb-2">
    🐶 Find your perfect companion — dogs, cats, and more.
  </p>
  <p className="text-lg text-blue-800">
    💖 Because every pet deserves a second chance.
  </p>
</div>

            </div>

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default BasicLayouts;
