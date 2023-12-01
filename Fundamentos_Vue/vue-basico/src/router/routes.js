import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardAplicacao from '@/views/DashboardAplicacao';
import LoginAplicacao from '@/views/LoginAplicacao';
import ControleDeClientes from '@/views/ControleDeClientes';
import ControleDeProdutos from '@/views/ControleDeProdutos';
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
    name: 'ControleDeClientes',
    component: ControleDeClientes,
    'title': 'Clientes'
  },
  {
    path: '/controle-de-produtos',
    name: 'ControleDeProdutos',
    component: ControleDeProdutos,
    'title': 'Produtos'
  }
]
export default routes