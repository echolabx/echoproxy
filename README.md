# EchoProxy - Modern API debugging Proxy with powerful Map Mock
**EchoProxy** is a modern API debugging proxy that offers powerful mapping and mocking capabilities. 
It helps developers to capture, debug, and modify HTTP(s) request/response flowing between clients and servers.

<img src="docs/src/assets/1.png" style="border-radius:6px;" alt="EchoProxy: Watch Proxy" />
<img src="docs/src/assets/2.png" style="border-radius:6px; margin-top: 0.5rem;" alt="EchoProxy: Map Mock" />

## Features
* 🚀 Powered by **Golang** for high-performance network application.
* 🪶 Lightweight, with **low** resource consumption, the installation file size is only **8MB**. 
* ⭐️ Hassle-free capture HTTP(s) requests/response from Web Browsers, iOS, and Android devices.
* 🚀 Map Mock is the first-class feature, easy to learn and use, helps you map/mock REST API request/response elegantly.
* 😀 Write EchoScript extensions in **any** programming language, such as JavaScript, Python, Java, Go, etc.
* ✅ Fully supports HTTP2.
* ✅ Modern and intuitive UI.
* ✅ MacOS 11+, Windows 10+

## Map Mock examples
Change Request **URL** and **Method**. It can be used for mapping APIs from PROD to DEV.
```go
on_request := func(env, req) {
  return {
    url: "http://127.0.0.1:8080/json",
    method: "GET"
  }
}
```

Change Request **Header** and **Query**. It can be used for debugging other developer's API.
```go
on_request := func(env, req) {
  return {
    header: {
      "Referer": "https://www.google.com/",
      "Accept-Encoding": "gzip"
    },
    query: {
      "name": "EchoProxy",
      "date": "2024-08-08"
    }
  }
}
```

Change Response **Body**. It can be used for mocking APIs for debugging and testing.
```go
on_response := func(env, res) {
  return {
    body: {
      "app": "EchoProxy",
      "comments": "Modern API debugging Proxy with powerful Map Mock",
      "date": "2024-06-30" 
    }
  }
}
```

The script changes request and response is named **EchoScript**. It is easy to learn and use.

## Download 
* Download the latest [macOS app (Apple Silicon)](https://github.com/echolabx/echoproxy/releases/download/v0.9.1/EchoProxy-0.9.1-mac-arm64.dmg)
* Download the latest [macOS app (Intel Chip)](https://github.com/echolabx/echoproxy/releases/download/v0.9.1/EchoProxy-0.9.1-mac-amd64.dmg)
* Download the latest [Windows app](https://github.com/echolabx/echoproxy/releases/download/v0.9.1/EchoProxy-0.9.1-windows-amd64.zip)
* [All Releases](https://github.com/echolabx/echoproxy/releases)

## Documentation
Please visit the [website](https://docs.echolabx.com/start/) for detail docs.

## Have a problem?
* Open a GitHub ticket
* echoproxy@echolabx.com

