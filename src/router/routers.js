let routes = []
const requireContext = require.context(
	'./',
	true,
	/index.js$/
)
requireContext.keys().forEach(filename => {
	if (filename === "./index.js") return
	const routerModule = requireContext(filename)
	routes = [...routes, ...(routerModule.default || routerModule)]
})
export default routes.sort(function(a, b) {
	return a.meta.sort - b.meta.sort
})
