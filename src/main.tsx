import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/_index";
import { PREFIX } from "./settings";
import NotFoundPage from "./routes/$";
import TicketPage, { loader as ticketPageLoader } from "./routes/ticket";

const router = createBrowserRouter([
	{
		path: `${PREFIX}/`,
		element: <Index />,
		errorElement: <NotFoundPage />,
	},
	{
		path: `${PREFIX}/ticket/`,
		element: <TicketPage />,
		loader: ticketPageLoader,
		errorElement: <NotFoundPage />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
