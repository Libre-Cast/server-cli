import https from 'https'

export default function (options) {
    const req = https.request(options, res => {
        res.setEncoding("utf8")
        res.on("data", chunk => {
            console.log(chunk)
        })
    })
    req.end()
}