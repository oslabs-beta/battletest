/**
 * @description require module without caching, allowing for fresh reload
 */
module.export = (module) => {
    delete require.cache[require.resolve(module)];
    return require(module);
}