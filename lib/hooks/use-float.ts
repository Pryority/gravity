import { atom, useAtom } from "jotai";
// import { Address } from "viem";

export type TokenType = "ERC-20" | "ERC-1155";
export type CurveType = "linear" | "exponential" | "logarithmic" | "flat price";
export type Symbol = "WETH" | "DEGEN " | "ENJOY" | "USDC" | "OP" | string;

export type FloatState = {
  erc: TokenType | null;
  base: Symbol | null; // TODO: Turn symbol into address later on
  name: string | null;
  symbol: string | null;
  isRoyalties: boolean | null;
  newRoyalties: boolean | null;
  x?: string | null;
  // warpcast: string | null;
  telegram?: string | null;
  website?: string | null;
  curve: {
    type: CurveType;
    rangeNum: number;
  } | null;
  totalSupply: number | null;
  creatorSupply: number | null;
  startPrice: number | null;
  endPrice: number | null;
};

const configAtom = atom<FloatState>({
  erc: "ERC-20",
  base: null,
  name: null,
  symbol: null,
  isRoyalties: false,
  newRoyalties: false,
  curve: {
    type: "exponential",
    rangeNum: 20,
  },
  totalSupply: 69000000420,
  creatorSupply: null,
  startPrice: 0.01,
  endPrice: 1,
});

export default function useFloat() {
  return useAtom(configAtom);
}
