export type Region = "RM" | "IV" | "V" | "VI" | "VII" | "VIII";
export type ModelInterest =
  | "Mac Mini M4 Básico"
  | "Mac Mini M4 Avanzado"
  | "Mac Mini M4 Pro";
export type OrderStatus =
  | "nuevo"
  | "revisando"
  | "confirmado"
  | "configurando"
  | "enviado"
  | "entregado";

export interface RegisterFormData {
  fullName: string;
  email: string;
  phone: string;
  region: Region;
  modelInterest: ModelInterest;
  message?: string;
  checkboxTerms: boolean;
  checkboxCommercial: boolean;
}

export interface RegisterResponse {
  tracking_token: string;
  tracking_url: string;
}

export interface CustomerOrder {
  id: string;
  tracking_token: string;
  full_name: string;
  email: string;
  model_interest: string;
  region: string;
  status: OrderStatus;
  created_at: string;
  updated_at: string;
}

export interface StatusHistoryEntry {
  id: string;
  status: OrderStatus;
  notes: string | null;
  created_at: string;
}
