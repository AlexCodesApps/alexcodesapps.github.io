for (const button of document.getElementsByClassName("counter")) {
  button.addEventListener('click', function() {
    button.textContent = parseInt(button.textContent) + 1
  })
}
