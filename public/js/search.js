
// variables
var input = document.querySelector('input')
/*eslint-disable*/
// functions
searchXHR(val, function (err, matchedCustomers) {
  if (err) console.error(err)
  else {
    RenderResults(matchedCustomers)
  }
})
function RenderResults (customerList) {
  input_val = document.getElementById('autocomplete-input').value // updates the variable on each ocurrence

  if (input_val && input_val.trim().length > 0) {
    autocomplete_results = document.getElementById('autocomplete-results')
    autocomplete_results.innerHTML = ''
    for (i = 0; i < customerList.length; i++) {
      autocomplete_results.innerHTML += '<li>' + customerList[i] + '</li>'
    }
    autocomplete_results.style.display = 'block'
  }
}

function searchXHR (val, results) {
  var xhr = new XMLHttpRequest()
  xhr
}

// events
input.onkeyup = function (e) {
  searchXHR(e.value)
}
