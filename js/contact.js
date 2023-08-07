


function backToLastPage() {
    window.history.back()
}

document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const form = event.target;
    const formData = new FormData(form);

    // Convert the form data into a JSON object
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // Send the JSON data to the specified Cloud Function using fetch or XMLHttpRequest
    const cloudFunctionUrl =
      "https://europe-southwest1-river-direction-395118.cloudfunctions.net/form-redirect-to-email";
    fetch(cloudFunctionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (response.ok) {
          alert("El formulario ha sido enviado correctamente. Gracias por confiar en nosotros.");
        } else {
            throw new Error("Error sending form data");
        }
      })
      .catch((error) => {
        console.log(error)
        alert("Ha ocurrido un error enviando el formulario. Por favor, inténtelo de nuevo.")
      });
  });


