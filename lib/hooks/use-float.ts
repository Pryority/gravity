import { atom, useAtom } from "jotai";
import { Address } from "viem";

export type TokenType = "ERC-20" | "ERC-1155";
export type CurveType = "linear" | "exponential" | "logarithmic" | "flat price";

export type FloatState = {
  erc: TokenType | null;
  base: Address | null;
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
};

const configAtom = atom<FloatState>({
  erc: "ERC-20",
  base: null,
  name: null,
  symbol: null,
  isRoyalties: false,
  newRoyalties: false,
  curve: {
    type: "linear",
    rangeNum: 20,
  },
});

export default function useFloat() {
  return useAtom(configAtom);
}
