const isProduction = false

const shopData = isProduction ? window.Shopify : JSON.parse('{"shop":"mike-development-store-2-0.myshopify.com","locale":"en","currency":{"active":"GBP","rate":"1.0"},"country":"GB","theme":{"name":"mike-development-theme-2.0/feature/responsive-i...","id":130499313819,"theme_store_id":null,"role":"main","handle":"null","style":{"id":null,"handle":null}},"cdnHost":"cdn.shopify.com","routes":{"root":"/"},"analytics":{"replayQueue":[]},"modules":true,"PaymentButton":{},"recaptchaV3":{"siteKey":"6LcCR2cUAAAAANS1Gpq_mDIJ2pQuJphsSQaUEuc9"}}')

const shopUrl = `https://${shopData.shop}`
const adminUrl = `https://admin.shopify.com/store/${shopData.shop.split('.')[0]}`
const themeId = shopData.theme.id
const customiserUrl = `${adminUrl}/themes/${themeId}/editor`
const themeUrl = `${shopUrl}?preview_theme_id=${themeId}`

export const shop = {
  shopData,
  shopUrl,
  adminUrl,
  customiserUrl,
  themeUrl
}
