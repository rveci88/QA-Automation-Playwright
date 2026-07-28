




// export async function handleRandomAds(page) {
//   await page.addLocatorHandler(
//     page.locator('.modal-backdrop, iframe[id*="google_ads"], .adsbygoogle'), 
//     async (overlay) => {
//       const closeButton = page.locator('#dismiss-button, .close, button:has-text("Close"), [aria-label="Close"]');
      
//       if (await closeButton.isVisible()) {
//         await closeButton.click();
//         await expect(overlay).toBeHidden(); 
//       }
//     }
//   );
// }