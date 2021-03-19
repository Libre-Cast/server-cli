import http, { request } from 'http'
import help from './libs/help.js'


const options = {
    hostname: "localhost",
    port: 18381,
    method: "GET",
    path: "/",
    headers: {
        settingValue: null
    }
}

const [node, entryPoint, option, ...args] = process.argv

switch (option) {
    case "settings":
        if (args[0] == "get")
            if (args[1]) {
                options.method = "GET"
                options.path = `/settings/get/${args[1]}`
                let req = http.request(options, res => console.log(res.on("data", data => process.stdout.write(data))))
                req.end()
            } else {
                options.method = "GET"
                options.path = `/settings/get`
                let req = http.request(options, res => console.log(res.on("data", data => process.stdout.write(data))))
                req.end()
            }
        else if (args[0] == "set")
            if (args[2]) {
                options.method = "POST"
                options.path = `/settings/set/${args[1]}`
                options.headers.settingValue = args[2]
                let req = http.request(options, res => console.log(res.on("data", data => process.stdout.write(data))))
                req.end()
            } else {
                console.log("You cannot set all settings in one, yet!")
            }
        
        break
    
    case "status":
        if (args[0] == "")

        break

    default:
        help.print()
        break
}