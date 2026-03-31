export interface PlanLimit {
  leads: string;
  aiMessages: string;
  csvImport: string;
  users: string;
  historyDays: string;
}

export interface PlanPricing {
  monthly: number;
  annual?: number;
  annualTotal?: number;
  currency: string;
  perMonth: string;
}

export interface Plan {
  id: "free" | "pro" | "business";
  name: string;
  badge?: string;
  description: string;
  pricing: PlanPricing;
  limits: PlanLimit;
  features: string[];
  notIncluded?: string[];
  extraUsers?: string;
}

export interface Feature {
  name: string;
  description: string;
  availableIn: Array<"free" | "pro" | "business">;
}

export interface FeatureCategory {
  category: string;
  features: Feature[];
}

export interface ComparisonRow {
  criterion: string;
  noto: string;
  competitor: string;
}

export interface Competitor {
  slug: string;
  name: string;
  title: string;
  description: string;
  directAnswer: string;
  rows: ComparisonRow[];
  verdict: string;
  pointsCles: string[];
}

export interface Persona {
  id: string;
  name: string;
  title: string;
  workflow: string;
  keyFeatures: string[];
  benefits: string[];
  testimonial?: string;
}

export interface UseCase {
  personas: Persona[];
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  metric?: string;
}

export interface GettingStartedStep {
  step: number;
  title: string;
  description: string;
  timeEstimate?: string;
}

export interface AiCapability {
  name: string;
  description: string;
  exampleCommands: string[];
}

export type ResponseFormat = "markdown" | "json";
export type Lang = "fr" | "en";
