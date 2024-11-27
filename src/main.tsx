import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/_index";
import { PREFIX } from "./settings";
import NotFoundPage from "./routes/$";
import TicketPage, { loader as ticketPageLoader } from "./routes/ticket";
import SchedulePage, { loader as schedulePageLoader } from "./routes/schedule";
import NewsPage from "./routes/news";
import NewsDetailPage from "./routes/news.pycon-apac-24-cfp-accepted-proposals-batch-1-3";
import CodeOfConductPage from "./routes/code-of-conduct";

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
		path: `${PREFIX}/schedule/`,
		element: <SchedulePage />,
		loader: schedulePageLoader,
		errorElement: <NotFoundPage />,
	},
	{
		path: `${PREFIX}/code-of-conduct/`,
		element: <CodeOfConductPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: `${PREFIX}/news/`,
		element: <NewsPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: `${PREFIX}/news/pycon-apac-24-cfp-accepted-proposals-batch-1-3/`,
		element: <NewsDetailPage />,
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
