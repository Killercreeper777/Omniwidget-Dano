// Configuración del widget de chat Sagicc

window.sagicc_omni_widget_config = {
  back_url: "https://sagicctest.sagicc.co",
  widget_token: "7b808eb7-eca7-485c-8810-77551a82a1b0",
}

// Cargar scripts del widget
;(() => {
  var sagicc_omni_widget_isSecured = window.location && window.location.protocol == "https:"

  var sagicc_omni_widget_runtime_js = document.createElement("script")
  sagicc_omni_widget_runtime_js.setAttribute(
    "src",
    "https://static.sagicc.co/chat/v2/static/js/runtime~sagicc-chat-v2.js",
  )
  document.body.appendChild(sagicc_omni_widget_runtime_js)

  var sagicc_omni_widget_js = document.createElement("script")
  sagicc_omni_widget_js.setAttribute("src", "https://static.sagicc.co/chat/v2/static/js/sagicc-chat-v2.js")
  document.body.appendChild(sagicc_omni_widget_js)
})()
