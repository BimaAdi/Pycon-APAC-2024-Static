import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { PREFIX } from "./settings";
import NotFound from "./routes/not-found";

const router = createBrowserRouter([
	{
		path: `${PREFIX}/`,
		element: <Root />,
		errorElement: <NotFound />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
