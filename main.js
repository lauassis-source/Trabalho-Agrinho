
:root {
    --cor-primaria: #2e7d32; /* Verde Ecologia */
    --cor-secundaria: #81c784;
    --cor-fundo: #f1f8e9; /* Verde bem claro */
    --cor-texto: #1b5e20;
    --cor-card: #ffffff;
    --cor-botao-hover: #1b5e20;
    --sombra: 0 8px 16px rgba(46, 125, 50, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--cor-fundo);
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Header */
header {
    background-color: var(--cor-primaria);
    color: white;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.header-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

/* Container Principal */
main {
    max-width: 650px;
    width: 100%;
    margin: 2rem auto;
    padding: 0 1rem;
    flex: 1;
}

/* Estilo dos Cards */
.card {
    background-color: var(--cor-card);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    box-shadow: var(--sombra);
    border-left: 5px solid var(--cor-primaria);
}

.intro-card h2 {
    color: var(--cor-texto);
    margin-bottom: 0.5rem;
}

.intro-card p {
    color: #555;
    line-height: 1.5;
}

/* Formulários */
.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--cor-texto);
}

.form-group select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid var(--cor-secundaria);
    border-radius: 8px;
    background-color: white;
    font-size: 1rem;
    color: #333;
    outline: none;
}

.form-group select:focus {
    border-color: var(--cor-primaria);
}

/* Botões */
.btn-calc, .btn-refazer {
    width: 100%;
    background-color: var(--cor-primaria);
    color: white;
    border: none;
    padding: 1rem;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
}

.btn-calc:hover {
    background-color: var(--cor-botao-hover);
}

.btn-calc:active {
    transform: scale(0.98);
}

.btn-refazer {
    background-color: #616161;
    margin-top: 1.5rem;
}

.btn-refazer:hover {
    background-color: #424242;
}

/* Card de Resultado */
.escondido {
    display: none !important;
}

.resultado-card {
    border-left-color: #f57c00;
    text-align: center;
    animation: slideIn 0.4s ease-out;
}

@keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.resultado-score {
    font-size: 2.5rem;
    font-weight: bold;
    color: #f57c00;
    margin: 1rem 0;
}

.dicas-container {
    background-color: #fff8e1;
    border: 1px solid #ffe082;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1.5rem;
    text-align: left;
}

.dicas-container h4 {
    color: #b78103;
    margin-bottom: 0.25rem;
}

/* Rodapé */
footer {
    background-color: var(--cor-texto);
    color: var(--cor-secundaria);
    text-align: center;
    padding: 1.5rem;
    font-size: 0.9rem;
    margin-top: auto;
}
