package controller

import (
	"html/template"
	"net/http"

	"github.com/lss/webapp/viewmodel"
)

type djay struct {
	djayTemplate *template.Template
}

func (d djay) registerRoutes() {
	http.HandleFunc("/djay", d.handleDJay)
}

func (d djay) handleDJay(w http.ResponseWriter, r *http.Request) {
	vm := viewmodel.NewDjay
	d.djayTemplate.Execute(w, vm)
}
