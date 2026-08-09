import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="space-y-2 p-2">
      <h2>Página no encontrada - Error 404</h2>
      <p className="flex items-center gap-2 flex-wrap">
        <Link
          to="/"
          className="bg-cyan-600 text-white px-2 py-1 rounded-sm uppercase font-black text-sm"
        >
          Ir a página principal
        </Link>
      </p>
    </div>
  );
}
