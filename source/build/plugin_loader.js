const fs = require("fs");
const path = require("path");
async function load_plugins(context, delete_cache = false) {
    const plugin_cache = {
        main: [],
        preload: [],
        renderer: [],
        titlebar: []
    };
    const directory_path = path.join(__dirname, "../../../plugins");
    is_loading = new Promise((resolve, reject) => {
        fs.readdir(directory_path, (err, files) => {
            if (err) {
                console.error("Unable to scan directory:", err);
                return reject(err)
            }
            const js_files = files.filter(file => path.extname(file) === ".js");
            js_files.forEach(file => {
                const file_path = path.join(directory_path, file);
                console.log(`Loading file from context ${context}: ${file_path}`);
                if (delete_cache) {
                    console.log("Invalidating cache for file:", file_path);
                    delete require.cache[path.resolve(file_path)]
                }
                let plugin;
                try {
                    plugin = require(file_path);
                } catch (e) {
                    console.log("Error loading file:", file_path, e);
                }
                if (plugin) {
                    plugin.path = file_path;
                    if (typeof plugin.context === "object") {
                        plugin.context.forEach(c => {
                            plugin_cache[c]?.push(plugin)
                        })
                    } else {
                        plugin_cache[plugin.context]?.push(plugin)
                    }
                }
            });
            resolve()
        })
    });
    await is_loading;
    return plugin_cache
}

function execute_plugins(plugins, context) {
    functions_in_scope = "";
    plugins?.forEach(plugin => {
        console.log(`Evaluating plugin ${plugin.name} in the ${context} context`);
        if (plugin.scope[plugin.context.indexOf(context)] === "loader") {
            console.log("Using loader scope for plugin " + plugin.name);
            functions_in_scope += `(${plugin.func.toString()})("${context}");`
        } else {
            console.log("Using plugin scope for plugin " + plugin.name);
            plugin.func(context)
        }
    });
    return functions_in_scope
}
module.exports = {
    load_plugins: load_plugins,
    execute_plugins: execute_plugins
};