/**
 * @author
 * @file index.ts
 * @fileBase index
 * @path test\index.ts
 * @from 
 * @desc 
 * @todo
 * 
 *
 * @done
 * @example
 */

import { ref } from "vue";

export interface indexOptions {
}

export const defaultindexOptions: indexOptions = {
};

export function index(options: Partial<indexOptions> = {}) {
  const opts = { ...defaultindexOptions, ...options };
  const value  = ref(null);

  return {value};
}
