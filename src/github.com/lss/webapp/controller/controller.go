package controller

import (
	"html/template"
	"net/http"
)

var (
	homeController home
	djayController djay
)

func Startup(templates map[string]*template.Template) {
	homeController.homeTemplate = templates["home.html"]
	homeController.standLocatorTemplate = templates["standlocator.html"]
	homeController.loginTemplate = templates["login.html"]
	homeController.djayTemplate = templates["djay.html"]
	//djayController.djayTemplate = templates["djay.html"]
	homeController.registerRoutes()
	//djayController.registerRoutes()
	http.Handle("/img/", http.FileServer(http.Dir("public")))
	http.Handle("/css/", http.FileServer(http.Dir("public")))
}
