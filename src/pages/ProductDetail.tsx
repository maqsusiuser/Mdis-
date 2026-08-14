import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Tag, Store, Check, Clock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Reveal, SectionTitle, Ornament, Section } from "@/components/ui";

import customIdScript from "@/assets/images/polarion/custom-id-script.png";
import customerFormExtension from "@/assets/images/polarion/customer-form-extension.png";
import workitemHistoryTrend from "@/assets/images/polarion/workitem-history-trend.png";
import commentingReport from "@/assets/images/polarion/commenting-report.png";
import crLifecycleReport from "@/assets/images/polarion/cr-lifecycle-report.png";
import customHFDocument from "@/assets/images/polarion/custom-hf-document.png";
import baselineReports from "@/assets/images/polarion/baseline-reports.png";
import sdlcReport from "@/assets/images/polarion/sdlc-report.png";
import dhfReport from "@/assets/images/polarion/dhf-report.png";
import ddReports from "@/assets/images/polarion/dd-reports.png";

import auditSop from "@/assets/images/mendix/audit-sop.png";
import ohsNavigator from "@/assets/images/mendix/ohs-navigator.png";
import learnPro from "@/assets/images/mendix/learn-pro.png";
import riskControlMatrix from "@/assets/images/mendix/risk-control-matrix.png";
import kpiManagement from "@/assets/images/mendix/kpi-management.png";
import idealTrack360 from "@/assets/images/mendix/ideal-track-360.png";
import chairmanReports from "@/assets/images/mendix/chairman-reports.png";
import quorum from "@/assets/images/mendix/quorum.png";
import petrolSafeAudit from "@/assets/images/mendix/petrol-safe-audit.png";
import ats from "@/assets/images/mendix/ats.png";
import crm from "@/assets/images/mendix/crm.png";
import digival from "@/assets/images/mendix/digival.png";

type Product = {
  name: string;
  platform: "polarion" | "mendix";
  version: string;
  downloads: string;
  image: string;
  overview: string;
  functionalFlow: string[];
  benefits: string[];
  futureEnhancements?: string[];
  roles?: { name: string; description: string }[];
  samples: { title: string; content: string; type: "text" | "code" }[];
};

const POLARION_PRODUCTS: Record<string, Product> = {
  "custom-id-script": {
    name: "Custom ID Script",
    platform: "polarion",
    version: "2.4.1",
    downloads: "1.2k",
    image: customIdScript,
    overview:
      "The Custom ID Script automatically creates standardized IDs/titles for Polarion work items, eliminating manual naming and preventing duplicates. It determines the highest existing sequence number, increments it, and constructs the new identifier with customizable prefixes and fields.",
    functionalFlow: [
      "User creates or edits a System Requirement in Polarion",
      "Script checks if an appropriate ID already exists",
      "If not, searches the project for existing items of the same type",
      "Determines the highest sequence number and increments it",
      "Constructs the new identifier with predefined prefix and format",
      "Saves the updated title to the work item",
    ],
    benefits: [
      "Automates requirement identification and naming",
      "Prevents duplicate or manual IDs",
      "Maintains consistent naming conventions",
      "Improves requirement traceability",
      "Reduces human input errors",
      "Supports custom fields in generated titles",
    ],
    futureEnhancements: [
      "Support for additional work item types",
      "Customizable ID templates",
      "Integration with external ID management systems",
      "Bulk ID generation for existing items",
    ],
    samples: [
      {
        title: "Before",
        content: "Sys-001 (manual)",
        type: "text",
      },
      {
        title: "After",
        content: "SYS-REQ-002 (auto-generated)",
        type: "text",
      },
      {
        title: "Configuration",
        content:
          "Prefix: SYS-REQ-\nField: System Requirement\nSequence: Auto-increment",
        type: "code",
      },
    ],
  },

  "customer-form-extension": {
    name: "Customer Form Extension",
    platform: "polarion",
    version: "1.8.0",
    downloads: "980",
    image: customerFormExtension,
    overview:
      "The Customer Form Extension provides a cleaner, organized way to review and summarize Polarion work-item and testing information. It aggregates data from multiple sources and presents it in a filterable, exportable format for reviews, audits, and collaboration.",
    functionalFlow: [
      "User opens the customization and selects filters (project, author, date, etc.)",
      "Polarion services retrieve the relevant work items and test runs",
      "Data is processed and converted into tables and summary information",
      "Results are displayed in an organized HTML view",
      "User can export or print the consolidated review information",
    ],
    benefits: [
      "Centralized review/test information from multiple Polarion items",
      "Filterable by project, author, date, and other criteria",
      "Exportable/printable results",
      "Reduces manual data collection effort",
      "Improves collaboration and audit readiness",
      "Maintains links back to original Polarion work items",
    ],
    futureEnhancements: [
      "Custom report templates",
      "Automated email notifications for pending reviews",
      "Integration with external document management systems",
      "Advanced filtering and search capabilities",
    ],
    samples: [
      {
        title: "Review Summary",
        content:
          "Project: Automotive Safety\nItems: 42\nPassed: 38\nFailed: 4\nPending: 0",
        type: "text",
      },
      {
        title: "Filter Options",
        content:
          "Project: [Dropdown]\nAuthor: [Dropdown]\nDate Range: [Picker]\nStatus: [Dropdown]",
        type: "code",
      },
    ],
  },

  "workitem-history-trend": {
    name: "Workitem History Trend",
    platform: "polarion",
    version: "3.1.2",
    downloads: "2.1k",
    image: workitemHistoryTrend,
    overview:
      "The Workitem History Trend report tracks how Polarion work items have changed over time, providing a detailed history of field changes, authors, and timestamps. It's particularly useful for configuration management, quality assurance, and compliance investigations.",
    functionalFlow: [
      "User selects a work item or set of work items",
      "System retrieves the complete change history from Polarion",
      "Data is processed to identify field-level changes",
      "Changes are grouped by field, author, and timestamp",
      "Report generates a comparison of historical field values",
      "Results are displayed in an interactive table/visualization",
    ],
    benefits: [
      "Identifies what changed, who changed it, and when",
      "Supports configuration management and audits",
      "Helps investigate unexpected changes",
      "Improves traceability and accountability",
      "Reduces manual history tracking effort",
      "Supports compliance with standards like ASPICE and ISO 26262",
    ],
    futureEnhancements: [
      "Change impact analysis",
      "Automated anomaly detection",
      "Integration with version control systems",
      "Custom alerting for critical changes",
    ],
    samples: [
      {
        title: "Change Example",
        content:
          "Field: Safety Level\nPrevious: ASIL B\nCurrent: ASIL D\nChanged By: QA Engineer\nTimestamp: 2024-03-15 14:32",
        type: "text",
      },
      {
        title: "Report Output",
        content:
          "Work Item: SYS-REQ-002\nField: Description\nChanges: 3\nAuthors: 2\nTime Range: 2024-01-01 to 2024-03-31",
        type: "code",
      },
    ],
  },

  "commenting-report": {
    name: "Commenting Report",
    platform: "polarion",
    version: "1.5.3",
    downloads: "1.5k",
    image: commentingReport,
    overview:
      "The Commenting Report collects and presents comments made throughout Polarion project documents in a centralized view, making reviews, collaboration, and audit activities easier to manage.",
    functionalFlow: [
      "User selects the required Polarion project or documents",
      "System retrieves comments associated with the selected documents and work items",
      "Comments are organized by document, work item, author, and date",
      "The report presents the collected comments in a centralized view",
      "User reviews, filters, and uses the report for collaboration or audit purposes",
    ],
    benefits: [
      "Centralizes comments from Polarion documents",
      "Improves review and collaboration workflows",
      "Makes audit review easier",
      "Provides better visibility into document discussions",
      "Reduces manual comment collection",
      "Improves traceability of discussions and decisions",
    ],
    futureEnhancements: [
      "Advanced comment filtering",
      "Comment analytics and trend visualization",
      "Automated review notifications",
      "Export to additional reporting formats",
    ],
    samples: [
      {
        title: "Comment Summary",
        content:
          "Document: System Requirements\nComments: 36\nAuthors: 8\nPending Reviews: 4",
        type: "text",
      },
      {
        title: "Report Fields",
        content:
          "Document → Work Item → Author → Comment → Date → Review Status",
        type: "code",
      },
    ],
  },

  "cr-lifecycle-report": {
    name: "CR Lifecycle Report",
    platform: "polarion",
    version: "2.0.0",
    downloads: "1.8k",
    image: crLifecycleReport,
    overview:
      "The CR Lifecycle Report analyzes the status, age, and progression of Change Requests in Polarion. It provides an interactive view of lifecycle stages, bottlenecks, and trends.",
    functionalFlow: [
      "System retrieves Change Requests from the selected Polarion project",
      "Change Requests are grouped according to their lifecycle status",
      "The age of each Change Request is calculated",
      "Status transitions and processing times are analyzed",
      "Results are presented through reports and visual summaries",
    ],
    benefits: [
      "Provides visibility into Change Request status",
      "Identifies aging Change Requests",
      "Highlights workflow bottlenecks",
      "Supports configuration management",
      "Improves change-control visibility",
      "Supports audit and compliance activities",
    ],
    futureEnhancements: [
      "Automated aging alerts",
      "Advanced lifecycle analytics",
      "Custom dashboard configurations",
      "Trend-based reporting",
    ],
    samples: [
      {
        title: "Lifecycle Summary",
        content:
          "Open: 18\nUnder Review: 7\nApproved: 22\nClosed: 41\nAverage Age: 12 days",
        type: "text",
      },
      {
        title: "Lifecycle",
        content:
          "Created → Review → Analysis → Approval → Implementation → Closed",
        type: "code",
      },
    ],
  },

  "custom-hf-document": {
    name: "Custom H&F Document",
    platform: "polarion",
    version: "1.2.4",
    downloads: "740",
    image: customHFDocument,
    overview:
      "The Custom H&F Document provides standardized headers and footers for Polarion documents, allowing project metadata, branding, confidentiality information, and other document information to be consistently displayed.",
    functionalFlow: [
      "User selects or generates a Polarion document",
      "The configured header and footer templates are loaded",
      "Project and document metadata are retrieved",
      "Metadata is inserted into the appropriate header and footer areas",
      "The document is generated with the standardized formatting",
    ],
    benefits: [
      "Standardizes document presentation",
      "Improves corporate branding",
      "Displays project metadata automatically",
      "Supports confidentiality markings",
      "Reduces manual document formatting",
      "Improves document consistency",
    ],
    futureEnhancements: [
      "Multiple header and footer templates",
      "Dynamic branding configurations",
      "Advanced document styling",
      "Additional metadata fields",
    ],
    samples: [
      {
        title: "Header",
        content:
          "Project: Automotive Safety\nDocument: System Requirements\nRevision: 04",
        type: "text",
      },
      {
        title: "Footer",
        content: "CONFIDENTIAL | Project XYZ | Page {PAGE} of {TOTAL}",
        type: "code",
      },
    ],
  },

  "baseline-reports": {
    name: "Baseline Reports",
    platform: "polarion",
    version: "2.6.1",
    downloads: "1.1k",
    image: baselineReports,
    overview:
      "Baseline Reports compares two Polarion baselines and identifies added, removed, and modified artifacts. It supports change control, configuration management, and traceability.",
    functionalFlow: [
      "User selects the first baseline",
      "User selects the second baseline",
      "System compares artifacts between the two baselines",
      "Added, removed, and modified artifacts are identified",
      "Comparison results are organized into a report",
      "User reviews the differences for configuration management or audit purposes",
    ],
    benefits: [
      "Provides clear baseline comparison",
      "Identifies changed artifacts",
      "Supports configuration management",
      "Improves change visibility",
      "Helps with audit preparation",
      "Reduces manual baseline comparison",
    ],
    futureEnhancements: [
      "Advanced change visualization",
      "Automated comparison scheduling",
      "Export to additional formats",
      "Change impact analysis",
    ],
    samples: [
      {
        title: "Baseline Comparison",
        content:
          "Baseline A: Release 2.0\nBaseline B: Release 2.1\nAdded: 14\nModified: 23\nRemoved: 3",
        type: "text",
      },
      {
        title: "Change Types",
        content: "Added → Modified → Removed → Unchanged",
        type: "code",
      },
    ],
  },

  "sdlc-report": {
    name: "SDLC Report",
    platform: "polarion",
    version: "4.0.0",
    downloads: "2.4k",
    image: sdlcReport,
    overview:
      "The SDLC Report provides a centralized view of documentation and approval information throughout the Software Development Lifecycle, including eSignature and approval status tracking.",
    functionalFlow: [
      "System collects SDLC documents and associated metadata",
      "Documents are grouped according to lifecycle stages",
      "Approval and eSignature information is retrieved",
      "Pending and completed approvals are identified",
      "The complete SDLC status is presented through a centralized report",
    ],
    benefits: [
      "Centralizes SDLC documentation",
      "Tracks approval status",
      "Provides eSignature visibility",
      "Improves lifecycle traceability",
      "Supports compliance reviews",
      "Reduces manual status tracking",
    ],
    futureEnhancements: [
      "Automated approval reminders",
      "Advanced lifecycle dashboards",
      "Additional eSignature integrations",
      "Custom reporting templates",
    ],
    samples: [
      {
        title: "SDLC Status",
        content:
          "Requirements: Approved\nDesign: Approved\nImplementation: In Progress\nTesting: Pending\nRelease: Pending",
        type: "text",
      },
      {
        title: "Approval Flow",
        content: "Author → Reviewer → Approver → eSignature → Approved",
        type: "code",
      },
    ],
  },

  "dhf-report": {
    name: "DHF Report",
    platform: "polarion",
    version: "1.9.2",
    downloads: "1.3k",
    image: dhfReport,
    overview:
      "The DHF Report automates the creation of a structured Design History File from Polarion project information for medical-device development and compliance activities.",
    functionalFlow: [
      "User selects the relevant Polarion project",
      "System retrieves requirements, design, verification, and validation information",
      "Relevant artifacts and traceability information are organized",
      "The information is structured into a Design History File format",
      "The generated report is reviewed for completeness and compliance",
    ],
    benefits: [
      "Automates DHF preparation",
      "Improves traceability",
      "Reduces manual documentation effort",
      "Supports medical-device compliance workflows",
      "Centralizes design history information",
      "Improves audit readiness",
    ],
    futureEnhancements: [
      "Additional regulatory templates",
      "Automated completeness checks",
      "Advanced traceability visualization",
      "Additional export formats",
    ],
    samples: [
      {
        title: "DHF Structure",
        content:
          "Design Inputs → Requirements → Design Outputs → Verification → Validation → Changes",
        type: "text",
      },
      {
        title: "Compliance",
        content: "ISO 13485\nFDA 21 CFR Part 820\nDesign History File",
        type: "code",
      },
    ],
  },

  "dd-reports": {
    name: "DD Reports",
    platform: "polarion",
    version: "2.2.0",
    downloads: "1.0k",
    image: ddReports,
    overview:
      "DD Reports tracks relationships between Polarion documents and visualizes parent, derived, and branched documents to improve traceability and version control.",
    functionalFlow: [
      "User selects the required Polarion document",
      "System identifies related parent and derived documents",
      "Document branches and relationships are analyzed",
      "Relationships are organized into a structured report",
      "User reviews document dependencies and version relationships",
    ],
    benefits: [
      "Improves document traceability",
      "Visualizes document relationships",
      "Supports version control",
      "Makes derived documents easier to identify",
      "Helps manage document branches",
      "Supports configuration management",
    ],
    futureEnhancements: [
      "Interactive relationship graphs",
      "Advanced dependency analysis",
      "Automated relationship validation",
      "Additional document comparison features",
    ],
    samples: [
      {
        title: "Document Relationship",
        content: "Parent Document → Derived Document → Branched Document",
        type: "text",
      },
      {
        title: "Traceability",
        content:
          "Document A\n ├── Document B\n ├── Document C\n └── Document D",
        type: "code",
      },
    ],
  },
};

const MENDIX_PRODUCTS: Record<string, Product> = {
  "kpi-management": {
    name: "KPI Management",
    platform: "mendix",
    version: "9.24.5",
    downloads: "60+",
    image: kpiManagement,
    overview:
      "The KPI Project Management Application manages project submission, validation, and approval with multi-level workflows, role-based access, and comprehensive audit tracking. It supports automatic project-ID generation and provides visibility into project status across departments.",
    functionalFlow: [
      "User submits a project with details (department, KPI, team, etc.)",
      "System generates a unique project ID",
      "Project enters the approval workflow (HOD → Pillar Head → MIS Team → Unit Head)",
      "Each approver reviews and either approves or rejects",
      "If approved at all levels, project is marked as active",
      "Audit logs track all changes and approvals",
    ],
    benefits: [
      "Multi-level approval workflows",
      "Automatic project-ID generation",
      "Role-based access control",
      "Comprehensive audit logs",
      "Department and KPI selection",
      "File upload support",
      "Team assignment capabilities",
      "Improved project visibility and accountability",
    ],
    roles: [
      {
        name: "Admin",
        description:
          "Creates users, manages accounts, assigns roles, and oversees system administration.",
      },
      {
        name: "HOD",
        description:
          "Reviews and approves projects submitted by their department.",
      },
      {
        name: "KK Pillar Head",
        description:
          "Validates projects against organizational KPIs and priorities.",
      },
      {
        name: "MIS Team",
        description:
          "Performs technical validation and data integrity checks.",
      },
      {
        name: "Unit Head",
        description:
          "Final approval authority for projects in their unit.",
      },
    ],
    futureEnhancements: [
      "Parallel approval workflows",
      "Integration with HR and finance systems",
      "Mobile approval application",
      "Advanced reporting and analytics",
    ],
    samples: [
      {
        title: "Project Submission",
        content:
          "Project Name: Safety System Upgrade\nDepartment: Engineering\nKPI: System Reliability\nTeam: QA, Development\nFiles: [Uploaded: Safety_Analysis.pdf]",
        type: "text",
      },
      {
        title: "Approval Workflow",
        content:
          "Submit → HOD Review → Pillar Head → MIS Review → Unit Head → Approved",
        type: "code",
      },
    ],
  },

  crm: {
    name: "CRM",
    platform: "mendix",
    version: "10.0.0",
    downloads: "30+",
    image: crm,
    overview:
      "Engage 360 is a Customer Relationship Management application that centralizes information about customers, organizations, contacts, leads, and sales activities. It provides role-based access with Super Admin and Sales Executive roles, enabling better customer communication and organized data management.",
    functionalFlow: [
      "Super Admin creates users and assigns roles",
      "Sales Executive adds organization and contact information",
      "Leads are created and associated with customers",
      "Job postings are created and managed",
      "Sales activities are recorded and tracked",
      "Reports are generated for customer analysis",
    ],
    benefits: [
      "Centralized customer and contact information",
      "Role-based access control",
      "Lead and opportunity management",
      "Job posting capabilities",
      "Sales activity tracking",
      "Improved customer communication",
      "Organized data management",
      "Audit trails for all changes",
    ],
    roles: [
      {
        name: "Super Admin",
        description:
          "Creates users, manages accounts, assigns roles, and performs overall system administration.",
      },
      {
        name: "Sales Executive",
        description:
          "Manages organization information, contacts, customer leads, and job postings.",
      },
    ],
    futureEnhancements: [
      "Integration with email and calendar systems",
      "Automated lead scoring",
      "Mobile CRM application",
      "Advanced reporting and dashboards",
    ],
    samples: [
      {
        title: "Customer Record",
        content:
          "Organization: Acme Corp\nContact: John Smith\nEmail: john@acme.com\nPhone: +1 (555) 123-4567\nLeads: 3\nActivities: 5",
        type: "text",
      },
      {
        title: "Job Posting",
        content:
          "Title: Senior Safety Engineer\nDepartment: Engineering\nLocation: Detroit, MI\nStatus: Open\nApplications: 8",
        type: "code",
      },
    ],
  },

  "audit-sop": {
    name: "Audit SOP",
    platform: "mendix",
    version: "10.0.0",
    downloads: "80+",
    image: auditSop,
    overview:
      "Audit SOP digitizes and streamlines audit procedures and standard operating procedures, providing structured workflows for planning, execution, findings, and reporting.",
    functionalFlow: [
      "User creates or selects an audit",
      "Audit scope and SOP requirements are defined",
      "Auditor performs the required checks",
      "Findings and observations are recorded",
      "Corrective actions are assigned and tracked",
      "Audit results are finalized and reported",
    ],
    benefits: [
      "Digitizes audit procedures",
      "Standardizes audit execution",
      "Improves finding tracking",
      "Supports corrective action management",
      "Provides centralized audit records",
      "Improves audit visibility",
    ],
    futureEnhancements: [
      "Mobile audit execution",
      "Advanced audit analytics",
      "Automated reminders",
      "Additional reporting templates",
    ],
    samples: [
      {
        title: "Audit Workflow",
        content:
          "Plan → Execute → Findings → Corrective Action → Review → Close",
        type: "code",
      },
      {
        title: "Audit Summary",
        content: "Audits: 24\nOpen Findings: 8\nClosed Findings: 41",
        type: "text",
      },
    ],
  },

  "ohs-navigator": {
    name: "OHS Navigator",
    platform: "mendix",
    version: "9.24.5",
    downloads: "60+",
    image: ohsNavigator,
    overview:
      "OHS Navigator provides centralized workplace safety management for incidents, hazards, near misses, and safety events with structured workflows and reporting.",
    functionalFlow: [
      "User records a safety incident, hazard, or near miss",
      "System categorizes and assigns the event",
      "Responsible personnel investigate the event",
      "Corrective and preventive actions are recorded",
      "Actions are monitored until completion",
      "Safety reports and dashboards provide management visibility",
    ],
    benefits: [
      "Centralizes workplace safety information",
      "Improves incident tracking",
      "Supports hazard management",
      "Tracks corrective actions",
      "Improves safety reporting",
      "Provides management visibility",
    ],
    futureEnhancements: [
      "Mobile incident reporting",
      "Predictive safety analytics",
      "Automated escalation",
      "Advanced safety dashboards",
    ],
    samples: [
      {
        title: "Safety Event",
        content:
          "Type: Near Miss\nLocation: Production Area\nSeverity: Medium\nStatus: Under Investigation",
        type: "text",
      },
      {
        title: "Safety Flow",
        content:
          "Report → Investigate → Corrective Action → Verify → Close",
        type: "code",
      },
    ],
  },

  "learn-pro": {
    name: "Learn Pro",
    platform: "mendix",
    version: "10.0.0",
    downloads: "70+",
    image: learnPro,
    overview:
      "Learn Pro is a digital learning and training management application for organizing courses, training content, learner assignments, and progress.",
    functionalFlow: [
      "Administrator creates courses and training content",
      "Learners are assigned required training",
      "Learners access course material",
      "Training progress and completion are recorded",
      "Assessments and results are captured",
      "Management reviews training status and completion",
    ],
    benefits: [
      "Centralized training management",
      "Tracks learner progress",
      "Organizes course content",
      "Supports training assignments",
      "Improves completion visibility",
      "Reduces manual training administration",
    ],
    futureEnhancements: [
      "Mobile learning",
      "Advanced learning analytics",
      "Automated certification",
      "External learning integrations",
    ],
    samples: [
      {
        title: "Training Status",
        content:
          "Assigned: 120\nCompleted: 96\nIn Progress: 18\nPending: 6",
        type: "text",
      },
      {
        title: "Learning Flow",
        content: "Assign → Learn → Assess → Complete → Certify",
        type: "code",
      },
    ],
  },

  "risk-control-matrix": {
    name: "Risk Control Matrix",
    platform: "mendix",
    version: "9.24.4",
    downloads: "70+",
    image: riskControlMatrix,
    overview:
      "Risk Control Matrix maps organizational risks to controls, evidence, and assessments, providing structured risk and compliance management.",
    functionalFlow: [
      "User identifies and records a risk",
      "Risk is assessed according to defined criteria",
      "Applicable controls are associated with the risk",
      "Evidence is collected for each control",
      "Control effectiveness is assessed",
      "Management reviews risk and control status",
    ],
    benefits: [
      "Centralizes risk information",
      "Maps risks to controls",
      "Improves compliance visibility",
      "Tracks control evidence",
      "Supports risk assessments",
      "Improves governance workflows",
    ],
    futureEnhancements: [
      "Automated risk scoring",
      "Control effectiveness analytics",
      "Compliance framework integrations",
      "Advanced risk dashboards",
    ],
    samples: [
      {
        title: "Risk Example",
        content:
          "Risk: Unauthorized Access\nControl: Access Review\nStatus: Effective\nEvidence: Q4 Review",
        type: "text",
      },
      {
        title: "Risk Flow",
        content: "Identify → Assess → Control → Evidence → Review",
        type: "code",
      },
    ],
  },

  "ideal-track-360": {
    name: "Ideal Track 360",
    platform: "mendix",
    version: "9.24.4",
    downloads: "40+",
    image: idealTrack360,
    overview:
      "Ideal Track 360 provides 360-degree tracking of business activities using centralized information, dashboards, and reporting.",
    functionalFlow: [
      "Users enter or import business activity information",
      "Activities are organized according to business categories",
      "Progress and ownership are tracked",
      "Management dashboards summarize activity status",
      "Reports provide organizational visibility",
    ],
    benefits: [
      "Centralized activity tracking",
      "Improves organizational visibility",
      "Provides management dashboards",
      "Tracks ownership and progress",
      "Supports reporting",
      "Reduces fragmented information",
    ],
    futureEnhancements: [
      "Advanced analytics",
      "Automated alerts",
      "Mobile dashboards",
      "Additional integrations",
    ],
    samples: [
      {
        title: "Activity Overview",
        content:
          "Total Activities: 184\nCompleted: 121\nIn Progress: 48\nPending: 15",
        type: "text",
      },
      {
        title: "Tracking Flow",
        content: "Create → Assign → Track → Review → Complete",
        type: "code",
      },
    ],
  },

  "chairman-reports": {
    name: "Chairman Reports",
    platform: "mendix",
    version: "9.24.4",
    downloads: "40+",
    image: chairmanReports,
    overview:
      "Chairman Reports transforms organizational information into structured management reports and dashboards designed for leadership review and decision-making.",
    functionalFlow: [
      "Business information is collected from operational sources",
      "Relevant metrics and activities are consolidated",
      "Information is organized into management reports",
      "Dashboards summarize key organizational indicators",
      "Leadership reviews the reports for decision-making",
    ],
    benefits: [
      "Centralizes executive reporting",
      "Improves management visibility",
      "Provides structured dashboards",
      "Supports decision-making",
      "Reduces manual report preparation",
      "Improves reporting consistency",
    ],
    futureEnhancements: [
      "Automated report generation",
      "Scheduled report delivery",
      "Advanced executive dashboards",
      "Additional data integrations",
    ],
    samples: [
      {
        title: "Executive Summary",
        content:
          "Projects: 42\nOn Track: 34\nAt Risk: 5\nDelayed: 3",
        type: "text",
      },
      {
        title: "Report Flow",
        content: "Collect → Consolidate → Analyze → Report → Review",
        type: "code",
      },
    ],
  },

  quorum: {
    name: "Quorum",
    platform: "mendix",
    version: "9.24.5",
    downloads: "40+",
    image: quorum,
    overview:
      "Quorum is a meeting and decision management application supporting governance activities, participant tracking, voting, decisions, and formal records.",
    functionalFlow: [
      "Meeting is scheduled",
      "Participants and agenda items are recorded",
      "Meeting takes place and discussions are documented",
      "Votes and decisions are recorded",
      "Actions are assigned to responsible participants",
      "Meeting records are finalized and retained",
    ],
    benefits: [
      "Structured meeting management",
      "Improves governance workflows",
      "Tracks participants",
      "Records decisions",
      "Supports voting",
      "Maintains formal meeting records",
    ],
    futureEnhancements: [
      "Calendar integrations",
      "Automated meeting reminders",
      "Digital signatures",
      "Advanced decision analytics",
    ],
    samples: [
      {
        title: "Meeting",
        content:
          "Meeting: Board Review\nParticipants: 8\nAgenda Items: 12\nDecisions: 7",
        type: "text",
      },
      {
        title: "Decision Flow",
        content: "Agenda → Discussion → Vote → Decision → Action",
        type: "code",
      },
    ],
  },

  "petrol-safe-audit": {
    name: "Petrol Safe Audit",
    platform: "mendix",
    version: "9.24.4",
    downloads: "60+",
    image: petrolSafeAudit,
    overview:
      "Petrol Safe Audit supports safety auditing in petroleum and industrial environments through structured inspections, findings, corrective actions, and reporting.",
    functionalFlow: [
      "Auditor selects the facility or inspection area",
      "Safety checklist and inspection criteria are loaded",
      "Inspection findings are recorded",
      "Non-conformities are assigned for corrective action",
      "Corrective actions are tracked",
      "Final audit results are reported",
    ],
    benefits: [
      "Standardizes safety inspections",
      "Tracks findings and non-conformities",
      "Supports corrective action tracking",
      "Improves audit visibility",
      "Centralizes inspection records",
      "Supports industrial safety management",
    ],
    futureEnhancements: [
      "Mobile inspection workflows",
      "Automated escalation",
      "Risk-based inspection planning",
      "Advanced safety analytics",
    ],
    samples: [
      {
        title: "Inspection",
        content:
          "Facility: Plant A\nArea: Storage\nFindings: 12\nCritical: 1\nOpen Actions: 5",
        type: "text",
      },
      {
        title: "Audit Flow",
        content:
          "Plan → Inspect → Record Finding → Correct → Verify → Close",
        type: "code",
      },
    ],
  },

  ats: {
    name: "ATS",
    platform: "mendix",
    version: "9.24.5",
    downloads: "99+",
    image: ats,
    overview:
      "ATS is an Applicant Tracking System for managing recruitment including job postings, candidates, applications, hiring workflows, and recruitment analytics.",
    functionalFlow: [
      "Recruiter creates a job posting",
      "Candidates apply for available positions",
      "Applications are reviewed and shortlisted",
      "Interviews and recruitment activities are scheduled",
      "Candidate status is updated throughout the hiring process",
      "Selected candidates progress to hiring",
    ],
    benefits: [
      "Centralizes recruitment information",
      "Tracks candidates",
      "Manages job postings",
      "Supports hiring workflows",
      "Improves recruitment visibility",
      "Reduces manual recruitment administration",
    ],
    futureEnhancements: [
      "Automated candidate matching",
      "Email and calendar integration",
      "Recruitment analytics",
      "Mobile recruiter experience",
    ],
    samples: [
      {
        title: "Recruitment Pipeline",
        content:
          "Applied: 48\nScreened: 21\nInterview: 9\nOffer: 3\nHired: 2",
        type: "text",
      },
      {
        title: "Hiring Flow",
        content: "Job → Apply → Screen → Interview → Offer → Hire",
        type: "code",
      },
    ],
  },

  digival: {
    name: "Digival",
    platform: "mendix",
    version: "9.24.5",
    downloads: "40+",
    image: digival,
    overview:
      "Digival provides digital validation and approval management for Change Requests using project-based workflows, role-based access, and audit tracking.",
    functionalFlow: [
      "User creates a Change Request",
      "Change Request is associated with the appropriate project",
      "Required validation activities are performed",
      "Approvers review the Change Request",
      "Approval or rejection is recorded",
      "Audit history tracks validation and approval activity",
    ],
    benefits: [
      "Digitizes change validation",
      "Provides structured approval workflows",
      "Supports project-based change management",
      "Improves auditability",
      "Provides role-based access",
      "Improves change traceability",
    ],
    futureEnhancements: [
      "Automated approval reminders",
      "Advanced validation rules",
      "Digital signature integration",
      "Advanced audit dashboards",
    ],
    samples: [
      {
        title: "Change Request",
        content:
          "CR: CR-2026-014\nProject: Safety Platform\nStatus: Under Validation\nApprovers: 3",
        type: "text",
      },
      {
        title: "Validation Flow",
        content:
          "Create → Validate → Review → Approve → Implement → Close",
        type: "code",
      },
    ],
  },
};

export default function ProductDetail() {
  const { platform, id } = useParams<{
    platform: string;
    id: string;
  }>();

  const isPolarion = platform === "polarion";
  const isMendix = platform === "mendix";

  const products = isPolarion
    ? POLARION_PRODUCTS
    : isMendix
      ? MENDIX_PRODUCTS
      : {};

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory pt-32 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl text-navy">
            Product Not Found
          </h2>

          <p className="mt-4 text-slatey">
            The requested product does not exist or has been removed.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 text-golddeep hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={
          isPolarion ? "Polarion Application" : "Mendix Application"
        }
        title={product.name}
        subtitle={product.overview.split(".")[0] + "."}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "MDIS MarketPlace", to: "/products" },
          { label: product.name },
        ]}
      />

      <Section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            <div className="space-y-12">

              {/* Overview */}
              <div>
                <SectionTitle
                  eyebrow="Overview"
                  title="What it does"
                />

                <Reveal>
                  <p className="mt-4 text-slatey">
                    {product.overview}
                  </p>
                </Reveal>
              </div>

              {/* Functional Flow */}
              <div>
                <SectionTitle
                  eyebrow="Functional Flow"
                  title="How it works"
                />

                <Reveal>
                  <ol className="mt-6 space-y-3">
                    {product.functionalFlow.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-sm font-semibold text-golddeep">
                          {i + 1}
                        </span>

                        <span className="text-slatey">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              </div>

              {/* Benefits */}
              <div>
                <SectionTitle
                  eyebrow="Benefits"
                  title="Why it's useful"
                />

                <Reveal>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {product.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-4"
                      >
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-golddeep" />

                        <span className="text-slatey">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Future Enhancements */}
              {"futureEnhancements" in product &&
                product.futureEnhancements && (
                  <div>
                    <SectionTitle
                      eyebrow="Future Enhancements"
                      title="What's next"
                    />

                    <Reveal>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {product.futureEnhancements.map(
                          (enhancement, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-4"
                            >
                              <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-golddeep" />

                              <span className="text-slatey">
                                {enhancement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </Reveal>
                  </div>
                )}

              {/* Roles */}
              {"roles" in product && (
                <div>
                  <SectionTitle
                    eyebrow="Roles"
                    title="Who uses it"
                  />

                  <Reveal>
                    <div className="mt-6 space-y-4">
                      {product.roles?.map((role, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-navy/10 bg-white p-5"
                        >
                          <div className="flex items-center gap-3">
                            <ShieldCheck className="h-6 w-6 text-golddeep" />

                            <h4 className="font-serif text-lg font-semibold text-navy">
                              {role.name}
                            </h4>
                          </div>

                          <p className="mt-2 text-slatey">
                            {role.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              )}

              {/* Samples */}
              <div>
                <SectionTitle
                  eyebrow="Samples"
                  title="Examples"
                />

                <Reveal>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {product.samples.map((sample, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-navy/10 bg-white p-4"
                      >
                        <h5 className="font-medium text-navy">
                          {sample.title}
                        </h5>

                        {sample.type === "code" ? (
                          <pre className="mt-2 overflow-x-auto rounded bg-navy/5 p-3 text-xs text-navy">
                            {sample.content}
                          </pre>
                        ) : (
                          <p className="mt-2 text-sm text-slatey">
                            {sample.content}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-navy/10 bg-white p-6">

                <div className="flex items-center justify-between">
                  <Store className="h-6 w-6 text-golddeep" />

                  <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-golddeep">
                    {isPolarion ? "Polarion" : "Mendix"}
                  </span>
                </div>

                <div className="mt-4 flex h-32 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-navy/5 to-navy/15">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-3"
                  />
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-navy">
                  {product.name}
                </h3>

                <div className="mt-4 space-y-3 border-t border-navy/10 pt-4 text-sm">

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-slatey">
                      <Tag className="h-4 w-4" />
                      Version
                    </span>

                    <span className="font-medium text-navy">
                      v{product.version}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-slatey">
                      <span className="text-base">↓</span>
                      Downloads
                    </span>

                    <span className="font-medium text-navy">
                      {product.downloads}
                    </span>
                  </div>

                </div>

                {/* Download Application button removed */}

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="block w-full rounded-full border border-navy/15 bg-ivory py-3 text-center text-sm font-semibold text-navy transition-colors hover:border-gold hover:bg-white"
                  >
                    Request Support
                  </Link>
                </div>
              </div>

              {/* Product Details */}
              <div className="rounded-2xl border border-navy/10 bg-white p-6 text-sm">
                <h4 className="font-serif text-lg font-semibold text-navy">
                  Product Details
                </h4>

                <div className="mt-4 space-y-3 border-t border-navy/10 pt-4">

                  <div>
                    <p className="font-medium text-navy">
                      Published By
                    </p>

                    <p className="text-slatey">
                      Maqsusi Digital Industries Software
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-navy">
                      Platform
                    </p>

                    <p className="text-slatey">
                      {isPolarion ? "Polarion ALM" : "Mendix"}
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-navy">
                      Category
                    </p>

                    <p className="text-slatey">
                      {isPolarion
                        ? "Engineering & Compliance"
                        : "Business Applications"}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <Ornament className="mt-16" />

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-golddeep hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Marketplace
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-goldlight"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}