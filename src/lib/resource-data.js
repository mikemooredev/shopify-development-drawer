export const data = {
  admin_url: 'https://admin.shopify.com/store',
  object_url: 'https://shopify.dev/docs/api/liquid/objects',
  resources: [
    {
      resource_type: '*',
      related_objects: [
        'request',
        'routes',
        'shop',
        'template',
      ]
    },
    {
      resource_type: 'blogs',
      related_objects: [
        'article',
        'blog',
      ]
    },
    {
      resource_type: 'collections',
      related_objects: [
        'collection',
        'product',
        'variant',
      ]
    },
    {
      resource_type: 'customers',
      related_objects: [
        'customer',
        'order',
      ]
    },
    {
      resource_type: 'pages',
      related_objects: [
        'page',
      ]
    },
    {
      resource_type: 'products',
      related_objects: [
        'product',
        'variant',
      ]
    },
  ]
}
