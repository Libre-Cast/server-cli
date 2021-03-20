import fetchAndPrint from './libs/fetchAndPrint.js'
import help from './libs/help.js'


const options = {
    hostname: "localhost",
    port: 18381,
    method: "GET",
    path: "/",
    rejectUnauthorized: false,
    requestCert: true,
    headers: {}
}

const [,, option, ...args] = process.argv

switch (option) {
    case "settings":
        if (args[0] == "get")
            if (args[1]) {
                options.method = "GET"
                options.path = `/settings/get/${args[1]}`
                fetchAndPrint(options)
            } else {
                options.method = "GET"
                options.path = `/settings/get`
                fetchAndPrint(options)
            }
        else if (args[0] == "set")
            if (args[2]) {
                options.method = "POST"
                options.path = `/settings/set/${args[1]}`
                options.headers.settingValue = args[2]
                fetchAndPrint(options)
            } else {
                console.log("You cannot set all settings at once, yet!")
            }
        
        break
    
    case "status":
        if (args[0] == "casting") {
            options.method = "GET"
            options.path = `/server/status/casting`
            fetchAndPrint(options)
        } else if (args[0] == "allow-connect") {
            options.method = "GET"
            options.path = `/server/status/allowConnections`
            fetchAndPrint(options)
        } else {
            options.method = "GET"
            options.path = `/server/status`
            fetchAndPrint(options)
        }

        break

    case "qrcode":
        options.method = "GET"
        options.path = `/server/qrcode/${args[0] ? args[0] : "svg"}`
        fetchAndPrint(options)

        break

    case "notify":
        options.method = "POST"
        options.path = "/server/notify"
        options.headers.notiTitle = args[0]
        options.headers.notiMessage = args[1]
        fetchAndPrint(options)

        break

    case "manual":
        console.log(args)
        options.method = args[0].toUpperCase()
        options.path = `/${args[1]}`
        options.headers = args[2] ? JSON.parse(args[2]) : ''

        console.log(console.headers);

        fetchAndPrint(options)

        break

    default:
        help.print()
        break
}