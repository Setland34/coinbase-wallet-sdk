import { createCoinbaseWalletSDK } from '@coinbase/wallet-sdk';
 
export const sdk = createCoinbaseWalletSDK({
    appName: "My App",
    appLogoUrl: "https://example.com/logo.png",
    appChainIds: [8453],
    preference: {
        options: "smartWalletOnly",
        attribution: {
            auto: true,
        }
    },
});
import { sdk } from './setup'
 
// Create provider
export const provider = sdk.getProvider();
// Use provider
const addresses = provider.request({ method: 'eth_requestAccounts' });
