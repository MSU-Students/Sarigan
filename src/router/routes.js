const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: 'ssigninPage', 
        component: () => import('pages/SSigninPage.vue')
      },
      { 
        path: 'ssigninPage2', 
        component: () => import('pages/SSigninPage2.vue')
      },
      { 
        path: 'fsigninPage', 
        component: () => import('pages/FSigninPage.vue')
      },
      { 
        path: 'fsigninPage2', 
        component: () => import('pages/FSigninPage2.vue')
      },
      { 
        path: 'userIdentifyer', 
        component: () => import('pages/UserIdentifyer.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
