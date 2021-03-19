# Introduction
A simple CLI that can control the server. Mostly used for testing purposes, but should in theory work so that you could script the server in some way.


# Usage
## Basic usage
```bash
node index.js [command] <args>
```

## Available commands
* `settings`
    * `get [key]`
    * `set [key] [value]`
* `status`
    * `allow-connect`
    * `casting`
    * Only using `status` will recieve both of the above, as well as some extras.
* `qrcode <type>`

    Available types:
    * `utf8` - utf8 text representing the qr code.
    * `terminal` - "fancier" version of above; bigger in size.
    * `svg` (default) - gives you svg xml data.

* `manual [method] [path] <headers as json>`

    For manual testing purposes or scripting, basically: \
    Know what you're doing!

```bash
[required] <optional>
```

# Installation
```bash
git clone https://github.com/Libre-Cast/server-cli
cd server-cli
npm i
node index.js [command] <args>
```

# Bug report, issues, requests
Just create and issue for it, and I'll try to take a look into it.