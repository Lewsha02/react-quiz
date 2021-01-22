import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

const renderer = createRenderer();

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<RendererProvider renderer={renderer}>
				<App />
			</RendererProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
