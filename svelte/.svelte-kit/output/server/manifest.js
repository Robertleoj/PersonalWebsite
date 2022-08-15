export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","me-zoomed.png","me.png","profile.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-b03d09dd.js","imports":["_app/immutable/start-b03d09dd.js","_app/immutable/chunks/index-f96422a0.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "ultimate_tic_tac",
				pattern: /^\/ultimate_tic_tac\/?$/,
				names: [],
				types: [],
				path: "/ultimate_tic_tac",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
