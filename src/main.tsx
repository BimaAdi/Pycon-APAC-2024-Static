import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/_index";
import { PREFIX } from "./settings";
import NotFoundPage from "./routes/$";

const router = createBrowserRouter([
	{
		path: `${PREFIX}/`,
		element: <Index />,
		errorElement: <NotFoundPage />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
