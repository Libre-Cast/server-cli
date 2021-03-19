function log(output) {
    console.log(output)
}

export default {
    print: () => {
        log("LibreCast Server\n")
        log("Usage: 'node index.js <option> [arguments]'")
    }
}