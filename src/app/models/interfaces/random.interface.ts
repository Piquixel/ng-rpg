export interface RandomRequest {
  id: number;
  jsonrpc: string;
  method: string;
  params: RequestParams;
}

interface RequestParams {
  apiKey: string;
  max: number;
  min: number;
  n: number;
  replacement?: boolean;
}

export interface RandomResponse {
  id: number;
  jsonrpc: string;
  result: RandomResult;
}

interface RandomResult {
  advisoryDelay: number;
  bitsLeft: number;
  bitsUsed: number;
  random: RandomResultArray;
  requestsLeft: number;
}

interface RandomResultArray {
  data: number[];
  completionTime: string;
}
