import { http, createConfig } from 'wagmi'
import { polygon } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import { type Chain } from 'viem'

export const sepolia2 = {
  id: 11155111,
  name: "Sepolia",
  nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.sepolia.org'] },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://sepolia.etherscan.io' },
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
    ensUniversalResolver: {
      address: '0xc8Af999e38273D658BE1b921b88A9Ddf005769cC',
      blockCreated: 5317080,
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 14353601,
    },
  },
} as const satisfies Chain

export const xrplevm = {
  id: 1440002,
  name: "XRPL EVM Sidechain Devnet",
  nativeCurrency: { name: 'XRP', symbol: 'XRP', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc-evm-sidechain.xrpl.org'] },
  },
  blockExplorers: {
    default: { name: 'evm-sidechain', url: 'https://evm-sidechain.xrpl.org' },
  },
} as const satisfies Chain

export const config = createConfig({
  chains: [xrplevm],
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'Create Wagmi' }),
  ],
  ssr: true,
  transports: {
    [xrplevm.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}