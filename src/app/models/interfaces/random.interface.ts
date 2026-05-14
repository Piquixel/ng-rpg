export interface RandomResponse {
  jsonrpc: string;
  result: RandomResultEssentials;
  id: number;
}

interface RandomResultEssentials {
  random: RandomResultRandom;
  bitsUsed: number;
  bitsLeft: number;
  requestsLeft: number;
  advisoryDelay: number;
}

interface RandomResultRandom {
  data: number[];
  completionTime: string;
}

export interface RandomRequest {
  jsonrpc: string;
  method: string;
  params: ParamsEssentials;
  id: number;
}

interface ParamsEssentials {
  apiKey: string;
  n: number;
  min: number;
  max: number;
  replacement?: boolean;
}
