export interface Kpi {
    id: string;
    title: string;
    value: string;
    trend?: "up" | "down" | "neutral";
    period: string;
    details: string;
  }
  
  export const mockDashboardData = {
    kpis: [
      {
        id: "totalProcurementValue",
        title: "Total Procurement Value (Cumulative)",
        value: "AUD 1,250,670,000",
        trend: "up",
        period: "Last Financial Year",
        details: "Total monetary value of awarded contracts."
      },
      {
        id: "avgTenderProcessingTime",
        title: "Average Tender Processing Time",
        value: "35 Days",
        trend: "down",
        period: "Last Quarter",
        details: "Average time from tender publication to contract award."
      },
      {
        id: "smeContractAwardRate",
        title: "SME Contract Award Rate",
        value: "28.5%",
        trend: "up",
        period: "Last Financial Year",
        details: "Percentage of total contract value awarded to SMEs."
      },
      {
        id: "ocdsComplianceRate",
        title: "OCDS Compliance Rate",
        value: "92%",
        trend: "up",
        period: "Current Snapshot",
        details: "Percentage of records meeting defined OCDS data completeness."
      },
      {
        id: "highRiskTenders",
        title: "High-Risk Tenders",
        value: "15 Tenders (3%)",
        trend: "neutral",
        period: "Last Quarter",
        details: "Number/percentage of tenders flagged for potential integrity risks."
      }
    ] as Kpi[], // Add type assertion here
    spendByCategory: [
      { name: "IT Hardware", value: 350000000 },
      { name: "Consulting Services", value: 280000000 },
      { name: "Software Licenses", value: 220000000 },
      { name: "Construction Works", value: 180000000 },
      { name: "Office Supplies", value: 50000000 },
      { name: "Other", value: 170670000 }
    ],
    smeAwardRateTrend: [
      { quarter: "Q1 2023", rate: 22 },
      { quarter: "Q2 2023", rate: 24 },
      { quarter: "Q3 2023", rate: 23 },
      { quarter: "Q4 2023", rate: 26 },
      { quarter: "Q1 2024", rate: 27 },
      { quarter: "Q2 2024", rate: 28.5 }
    ],
    ocdsComplianceBreakdown: [
      { name: "Fully Compliant", value: 920 },
      { name: "Minor Errors", value: 60 },
      { name: "Major Issues", value: 20 }
    ],
    highRiskTendersTrend: [
      { quarter: "Q1 2023", count: 18 },
      { quarter: "Q2 2023", count: 16 },
      { quarter: "Q3 2023", count: 17 },
      { quarter: "Q4 2023", count: 14 },
      { quarter: "Q1 2024", count: 12 },
      { quarter: "Q2 2024", count: 15 }
    ],
    detailedHighRiskTenders: [
      {
        id: "TND-001",
        title: "City Wide Network Upgrade Phase 2",
        procuringEntity: "City Council IT Department",
        riskScore: 85,
        keyRedFlags: "Single Bidder, Short Tender Period",
        awardValue: "AUD 15,500,000",
        tenderPeriod: "7 days",
        status: "Awarded"
      },
      {
        id: "TND-002",
        title: "Central Library HVAC Replacement",
        procuringEntity: "Department of Public Works",
        riskScore: 78,
        keyRedFlags: "Winning Bid Too Close to Estimate",
        awardValue: "AUD 3,200,000",
        tenderPeriod: "25 days",
        status: "Awarded"
      },
      {
        id: "TND-003",
        title: "Security Services for Government Precinct",
        procuringEntity: "Ministry of Interior",
        riskScore: 92,
        keyRedFlags: "Single Bidder, High Value Contract",
        awardValue: "AUD 25,000,000",
        tenderPeriod: "15 days",
        status: "Open"
      }
    ],
    ocdsImportStatus: {
      lastImportTime: "2025-05-06 10:00:00 UTC",
      status: "Success",
      recordsProcessed: 1250,
      newRecords: 50,
      updatedRecords: 25
    }
  };
  
  