import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Routes,
} from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import DeferredBlogPostsPage, {
	loader as blogPostLoader,
} from './pages/DeferredBlogPosts';
import ErrorPage from './pages/Error';
import NewPostPage, {action as newPostAction} from './pages/NewPost';
import PostDetailPage, {loader as postDetailLoader} from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
			<Route index element={<WelcomePage />} />
			<Route path="/blog" element={<BlogLayout />}>
				<Route
					index
					element={<DeferredBlogPostsPage />}
					loader={blogPostLoader}
				/>
				<Route
					path=":id"
					element={<PostDetailPage />}
					loader={postDetailLoader}
					errorElement={<p> Error</p>}
				/>
			</Route>
			<Route
				path="/blog/new"
				element={<NewPostPage />}
				action={newPostAction}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
