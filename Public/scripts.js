function openSummary() {
    const form = document.getElementById('becaForm');
    const formData = new FormData(form);
    let summary = '';

    formData.forEach((value, key) => {
        summary += `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`;
    });

    const summaryWindow = window.open('', 'Resumen de Inscripción', 'width=600,height=400');
    summaryWindow.document.write(`
        <html>
        <head>
            <title>Resumen de Inscripción</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background-color: #f4f4f4;
                }
                .summary-container { 
                    margin-bottom: 20px; 
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .summary-container p { 
                    margin: 5px 0; 
                }
                button { 
                    padding: 10px 15px; 
                    background-color: #007BFF; 
                    color: #fff; 
                    border: none; 
                    border-radius: 4px; 
                    cursor: pointer; 
                }
                button:hover { 
                    background-color: #0056b3; 
                }
            </style>
        </head>
        <body>
            <h1>Resumen de Inscripción</h1>
            <div class="summary-container">${summary}</div>
            <button onclick="downloadSummary()">Descargar Resumen</button>
            <script>
                function downloadSummary() {
                    const summary = document.querySelector('.summary-container').outerHTML;
                    const style = \`
                        <style>
                            body { font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; }
                            .summary-container { margin-bottom: 20px; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
                            .summary-container p { margin: 5px 0; }
                        </style>
                    \`;
                    const blob = new Blob([style + summary], { type: 'text/html' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'resumen_inscripcion.html';
                    link.click();
                }
            </script>
        </body>
        </html>
    `);

    // Enviar datos del formulario al backend
    fetch('/api/inscripciones', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
