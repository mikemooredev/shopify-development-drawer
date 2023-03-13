import { ucFirst } from '../utils.js'
import { data } from './resource-data.js'

const isProduction = false

const shopData = isProduction ? window.Shopify : JSON.parse('{"shop":"mike-development-store-2-0.myshopify.com","locale":"en","currency":{"active":"GBP","rate":"1.0"},"country":"GB","theme":{"name":"mike-development-theme-2.0/feature/responsive-i...","id":130499313819,"theme_store_id":null,"role":"main","handle":"null","style":{"id":null,"handle":null}},"cdnHost":"cdn.shopify.com","routes":{"root":"/"},"analytics":{"replayQueue":[]},"modules":true,"PaymentButton":{},"recaptchaV3":{"siteKey":"6LcCR2cUAAAAANS1Gpq_mDIJ2pQuJphsSQaUEuc9"}}')

const { pathname } = window.location
const { resourceType, resourceId } = window?.meta?.page || { resourceType: null, resourceId: null }

const shopName = shopData.shop.split('.')[0]
const shopUrl = `https://${shopData.shop}`
const adminUrl = `${data.admin_url}/${shopName}`
const themeId = shopData.theme.id
const customiserUrl = `${adminUrl}/themes/${themeId}/editor?previewPath=${encodeURI(pathname)}`
const themeUrl = `${shopUrl}?preview_theme_id=${themeId}`
const resourceName = resourceType ? ucFirst(resourceType) : null
const resourceUrl = `${adminUrl}/${resourceType}`
const accentuateUrl = `${adminUrl}/apps/accentuate/app/edit?scope=${resourceType}&id=${resourceId}`

const resources = data.resources.filter(resource => (resource.resource_type === '*' || resource.resource_type === resourceType))

const relatedObjects = resources.map(resource => resource.related_objects).flat(1)
const objects = relatedObjects.map(relatedObject => {
  return {
    type: relatedObject,
    name: ucFirst(relatedObject),
    url: `${data.object_url}/${relatedObject}`
  }
})

export const shop = {
  pathname,
  resourceType,
  resourceId,
  shopName,
  shopUrl,
  adminUrl,
  themeId,
  customiserUrl,
  themeUrl,
  resourceName,
  resourceUrl,
  accentuateUrl,
  resources,
  relatedObjects,
  objects,
}
