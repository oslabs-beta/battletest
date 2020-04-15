module.exports = (path, operation, testFile) => {
    const filepath = pathUtil.resolve(process.cwd(), `__battletest__/${path}_${operation}.js`);
    fs.writeFileSync(filepath, testFile, (err) => { 
        if (err) throw err 
    });
}