import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardAplicacao from '@/views/DashboardAplicacao';
import LoginAplicacao from '@/views/LoginAplicacao';
import CadastroDeClientes from '@/views/CadastroDeClientes';
import CadastroDeProdutos from '@/views/CadastroDeProdutos';
const routes = [
  {
    path: '/',
    name: 'DashboardAplicacao',
    component: DashboardAplicacao,
    'title': 'Dashboard'
  },
  {
    path: '/login',
    name: 'LoginAplicacao',
    component: LoginAplicacao,
    'title': 'Login'
  },
  {
    path: '/controle-de-clientes',
    name: 'CadastroDeClientes',
    component: CadastroDeClientes,
    'title': 'Clientes'
  },
  {
    path: '/controle-de-produtos',
    name: 'CadastroDeProdutos',
    component: CadastroDeProdutos,
    'title': 'Produtos'
  }
]
export default routes