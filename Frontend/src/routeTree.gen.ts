/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchImport } from './routes/search'
import { Route as RegisterImport } from './routes/register'
import { Route as HomeImport } from './routes/home'
import { Route as ButtonsImport } from './routes/Buttons'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const HomeRoute = HomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const ButtonsRoute = ButtonsImport.update({
  id: '/Buttons',
  path: '/Buttons',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/Buttons': {
      id: '/Buttons'
      path: '/Buttons'
      fullPath: '/Buttons'
      preLoaderRoute: typeof ButtonsImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/Buttons': typeof ButtonsRoute
  '/home': typeof HomeRoute
  '/register': typeof RegisterRoute
  '/search': typeof SearchRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/Buttons': typeof ButtonsRoute
  '/home': typeof HomeRoute
  '/register': typeof RegisterRoute
  '/search': typeof SearchRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/Buttons': typeof ButtonsRoute
  '/home': typeof HomeRoute
  '/register': typeof RegisterRoute
  '/search': typeof SearchRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/Buttons' | '/home' | '/register' | '/search'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/Buttons' | '/home' | '/register' | '/search'
  id: '__root__' | '/' | '/Buttons' | '/home' | '/register' | '/search'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ButtonsRoute: typeof ButtonsRoute
  HomeRoute: typeof HomeRoute
  RegisterRoute: typeof RegisterRoute
  SearchRoute: typeof SearchRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ButtonsRoute: ButtonsRoute,
  HomeRoute: HomeRoute,
  RegisterRoute: RegisterRoute,
  SearchRoute: SearchRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/Buttons",
        "/home",
        "/register",
        "/search"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/Buttons": {
      "filePath": "Buttons.tsx"
    },
    "/home": {
      "filePath": "home.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
