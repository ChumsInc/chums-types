export type RiskFactSentiment = 'NEGATIVE'|'NEUTRAL'|'POSITIVE';
export type RiskAssessmentResult = 'HIGH'|'LOW'|'MEDIUM'|'NONE'|'PENDING';
export type OrderRiskRecommendationResult = 'ACCEPT'|'CANCEL'|'INVESTIGATE'|'NONE';

export interface RiskFact {
    description: string;
    sentiment: RiskFactSentiment;
}

export interface OrderRiskAssessment {
    facts: RiskFact[];
    riskLevel:RiskAssessmentResult;
}

export interface OrderRiskSummary {
    assessments: OrderRiskAssessment[];
    recommendation: OrderRiskRecommendationResult;
}
