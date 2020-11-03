'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get(
    '/',
    () =>
      'API do Jogos Adaptáveis - Documentação disponível em  https://documenter.getpostman.com/view/6331039/TVCmQjYG'
  )

  // Auth routes
  Route.post('/login', 'UserController.login')
  Route.post('/usuario', 'UserController.store')

  // User routes
  Route.get('/me', 'UserController.me').middleware('auth')
  Route.get('/usuario/:id', 'UserController.show').middleware('auth')
  Route.get('/usuario', 'UserController.index').middleware('auth')
  Route.put('/usuario/:id', 'UserController.update').middleware('auth')
  Route.delete('/usuario/:id', 'UserController.destroy').middleware('auth')

  // Player routes
  Route.post('/jogador', 'PlayerController.store').middleware('auth')
  Route.get('/jogador', 'PlayerController.index').middleware('auth')
  Route.get('/jogador/:id', 'PlayerController.show').middleware('auth')
  Route.put('/jogador/:id', 'PlayerController.update').middleware('auth')
  Route.delete('/jogador/:id', 'PlayerController.destroy').middleware('auth')

  // Themes routes
  Route.post('/tema', 'ThemeController.store').middleware('auth')
  Route.get('/tema', 'ThemeController.index').middleware('auth')
  Route.get('/tema/:id', 'ThemeController.show').middleware('auth')
  Route.put('/tema/:id', 'ThemeController.update').middleware('auth')
  Route.delete('/tema/:id', 'ThemeController.destroy').middleware('auth')

  // Institution routes
  Route.post('/instituicao', 'InstitutionController.store').middleware('auth')
  Route.get('/instituicao', 'InstitutionController.index')
  Route.get('/instituicao/:id', 'InstitutionController.show').middleware('auth')
  Route.put('/instituicao/:id', 'InstitutionController.update').middleware(
    'auth'
  )
  Route.delete('/instituicao/:id', 'InstitutionController.destroy').middleware(
    'auth'
  )

  // Groups routes
  Route.post('/grupo', 'GroupController.store').middleware('auth')
  Route.get('/grupo', 'GroupController.index').middleware('auth')
  Route.get('/grupo/:id', 'GroupController.show').middleware('auth')
  Route.put('/grupo/:id', 'GroupController.update').middleware('auth')
  Route.delete('/grupo/:id', 'GroupController.destroy').middleware('auth')

  // Category routes
  Route.post('/categoria', 'CategoryController.store').middleware('auth')
  Route.get('/categoria', 'CategoryController.index').middleware('auth')
  Route.get('/categoria/:id', 'CategoryController.show').middleware('auth')
  Route.put('/categoria/:id', 'CategoryController.update').middleware('auth')
  Route.delete('/categoria/:id', 'CategoryController.destroy').middleware(
    'auth'
  )

  // Media routes
  Route.post('/media/tema/:theme_id', 'MediaController.store').middleware(
    'auth'
  )
}).prefix('api/v1')
