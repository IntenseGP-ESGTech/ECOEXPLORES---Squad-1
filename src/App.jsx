/**
 * Configuração principal de roteamento da aplicação
 * @module App
 * @requires react-router-dom
 * @requires ./pages/*
 */

// Componentes de roteamento do React Router DOM v6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação de componentes de página
import { Apresentacao } from './pages/Apresentacao';        // Página inicial
import { Login } from './pages/Login';                      // Autenticação
import { PreCadastro } from './pages/PreCadastro';          // Seleção de tipo de cadastro
import { CadastroEscola } from './pages/CadastroEscola';    // Formulário escola
import { CadastroProfessor } from './pages/CadastroProfessor'; // Formulário professor
import { CadastroResponsavel } from './pages/CadastroResponsavel'; // Formulário responsável
import { CadastroAluno } from './pages/CadastroAluno';      // Formulário aluno
import { Home } from './pages/Home';                        // Dashboard principal

/**
 * Componente principal que define a estrutura de rotas da aplicação
 * @returns {JSX.Element} Estrutura de roteamento da aplicação
 */
export function App() {
  return (
    // Provedor de roteamento (BrowserRouter)
    <Router>
      {/* Container de rotas */}
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Apresentacao />} />                // Rota raiz
        <Route path="/login" element={<Login />} />                  // Rota de login
        <Route path="/precadastro" element={<PreCadastro />} />      // Seleção de cadastro
        
        {/* Rotas de formulários de cadastro */}
        <Route path="/cadastro/escola" element={<CadastroEscola />} />
        <Route path="/cadastro/professor" element={<CadastroProfessor />} />
        <Route path="/cadastro/responsavel" element={<CadastroResponsavel />} />
        <Route path="/cadastro/aluno" element={<CadastroAluno />} />
        
        {/* Rotas autenticadas */}
        <Route path="/home" element={<Home />} />                    // Dashboard
        <Route path="/apresentacao" element={<Apresentacao />} />    // Landing raiz
      </Routes>
    </Router>
  );
}