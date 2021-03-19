import http from 'http'

export default function (options) {
    const req = http.request(options, res => {
        res.setEncoding("utf8")
        res.on("data", chunk => {
            console.log(chunk)
        })
    })
    req.end()
}