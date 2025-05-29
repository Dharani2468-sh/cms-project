import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center  min-h-[80vh] px-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-lg text-lg transition duration-300">
          <Link to={'/login'}>
          Adopt a pet now!
          </Link>
        </button>
      </section>
    </div>
  );
}