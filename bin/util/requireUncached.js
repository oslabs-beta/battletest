/**
 * @description require module without caching, allowing for fresh reload
 */
module.exports= (module) => {
    delete require.cache[require.resolve(module)];
    return require(module);
}