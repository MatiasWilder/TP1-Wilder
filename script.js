document.addEventListener("DOMContentLoaded", function () {
    const matInput = document.getElementById("mat");
    const lenInput = document.getElementById("len");
    const efsInput = document.getElementById("efs");
    const resultDiv = document.createElement("div");
    document.body.appendChild(resultDiv);

    function validarNota(input) {
        let valor = parseInt(input.value);
        if (isNaN(valor) || valor < 1 || valor > 10) {
            input.style.borderColor = "red";
        } else {
            input.style.borderColor = "green";
        }
    }

    [matInput, lenInput, efsInput].forEach(input => {
        input.addEventListener("input", function () {
            validarNota(input);
        });
    });

    function obtenerNotas() {
        let mat = parseInt(matInput.value);
        let len = parseInt(lenInput.value);
        let efs = parseInt(efsInput.value);
        
        if (isNaN(mat) || isNaN(len) || isNaN(efs)) {
            alert("Todos los campos son obligatorios y deben contener valores entre 1 y 10.");
            return null;
        }
        return { mat, len, efs };
    }

    function calcularPromedio() {
        let notas = obtenerNotas();
        if (!notas) return;
        let promedio = (notas.mat + notas.len + notas.efs) / 3;
        resultDiv.innerText = `Promedio: ${promedio.toFixed(2)}`;
        resultDiv.style.color = promedio >= 6 ? "green" : "red";
    }

    function calcularMayorNota() {
        let notas = obtenerNotas();
        if (!notas) return;
        let maxNota = Math.max(notas.mat, notas.len, notas.efs);
        let materias = [];
        if (notas.mat === maxNota) materias.push("Matemática");
        if (notas.len === maxNota) materias.push("Lengua");
        if (notas.efs === maxNota) materias.push("EFSI");
        resultDiv.innerText = `Mayor nota en: ${materias.join(", ")} (${maxNota})`;
        resultDiv.style.color = "blue";
    }

    document.getElementById("prom").addEventListener("click", calcularPromedio);
    document.getElementById("may").addEventListener("click", calcularMayorNota);
    document.getElementById("env").addEventListener("click", obtenerNotas);
});
