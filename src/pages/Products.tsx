import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Store,
  Tag,
  Download,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import { Section } from "@/components/ui";

// ============================================================
// POLARION IMAGES
// ============================================================

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

// ============================================================
// MENDIX IMAGES
// ============================================================

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

// ============================================================
// TYPES
// ============================================================

type Platform = "polarion" | "mendix";

type Product = {
  id: string;
  name: string;
  platform: Platform;
  version: string;
  downloads: string;
  image: string;
  description: string;
};

// ============================================================
// POLARION PRODUCTS
// ============================================================

const POLARION_PRODUCTS: Product[] = [
  {
    id: "custom-id-script",
    name: "Custom ID Script",
    platform: "polarion",
    version: "2.4.1",
    downloads: "1.2k",
    image: customIdScript,
    description:
      "Automatically creates standardized IDs/titles for Polarion work items, preventing duplicates and improving traceability.",
  },
  {
    id: "customer-form-extension",
    name: "Customer Form Extension",
    platform: "polarion",
    version: "1.8.0",
    downloads: "980",
    image: customerFormExtension,
    description:
      "Provides a cleaner way to review and summarize work-item and testing information with organized filters and exportable results.",
  },
  {
    id: "workitem-history-trend",
    name: "Workitem History Trend",
    platform: "polarion",
    version: "3.1.2",
    downloads: "2.1k",
    image: workitemHistoryTrend,
    description:
      "Tracks how Polarion work items have changed over time, showing what changed, who changed it, and when for configuration management and audits.",
  },
  {
    id: "commenting-report",
    name: "Commenting Report",
    platform: "polarion",
    version: "1.5.3",
    downloads: "1.5k",
    image: commentingReport,
    description:
      "Collects and presents comments made throughout Polarion project documents in a centralized view for reviews, collaboration, and audits.",
  },
  {
    id: "cr-lifecycle-report",
    name: "CR Lifecycle Report",
    platform: "polarion",
    version: "2.0.0",
    downloads: "1.8k",
    image: crLifecycleReport,
    description:
      "Analyzes the status and age of Change Requests inside Polarion with an interactive dashboard for tracking bottlenecks and trends.",
  },
  {
    id: "custom-hf-document",
    name: "Custom H&F Document",
    platform: "polarion",
    version: "1.2.4",
    downloads: "740",
    image: customHFDocument,
    description:
      "Allows Polarion documents to have standardized headers and footers with project metadata, branding, and confidentiality information.",
  },
  {
    id: "baseline-reports",
    name: "Baseline Reports",
    platform: "polarion",
    version: "2.6.1",
    downloads: "1.1k",
    image: baselineReports,
    description:
      "Compares two different Polarion baselines to show added, removed, and modified artifacts for change control and configuration management.",
  },
  {
    id: "sdlc-report",
    name: "SDLC Report",
    platform: "polarion",
    version: "4.0.0",
    downloads: "2.4k",
    image: sdlcReport,
    description:
      "Provides a centralized view of documentation throughout the Software Development Lifecycle with eSignature and approval status tracking.",
  },
  {
    id: "dhf-report",
    name: "DHF Report",
    platform: "polarion",
    version: "1.9.2",
    downloads: "1.3k",
    image: dhfReport,
    description:
      "Automates the creation of a structured Design History File from Polarion project information for medical-device compliance.",
  },
  {
    id: "dd-reports",
    name: "DD Reports",
    platform: "polarion",
    version: "2.2.0",
    downloads: "1.0k",
    image: ddReports,
    description:
      "Tracks relationships between documents in Polarion, visualizing parent, derived, and branched documents for better traceability and version control.",
  },
];

// ============================================================
// MENDIX PRODUCTS
// ============================================================

const MENDIX_PRODUCTS: Product[] = [
  {
    id: "audit-sop",
    name: "Audit SOP",
    platform: "mendix",
    version: "10.0.0",
    downloads: "80+",
    image: auditSop,
    description:
      "Turns manual audit and SOP processes into structured digital workflows for audit planning, execution, findings, and corrective actions.",
  },
  {
    id: "ohs-navigator",
    name: "OHS Navigator",
    platform: "mendix",
    version: "9.24.5",
    downloads: "60+",
    image: ohsNavigator,
    description:
      "Manages workplace safety information, tracking incidents, hazards, near misses, and safety events for Occupational Health & Safety.",
  },
  {
    id: "learn-pro",
    name: "Learn Pro",
    platform: "mendix",
    version: "10.0.0",
    downloads: "70+",
    image: learnPro,
    description:
      "Organizes learning-related information and provides a structured digital environment for training and education management.",
  },
  {
    id: "risk-control-matrix",
    name: "Risk Control Matrix",
    platform: "mendix",
    version: "9.24.4",
    downloads: "70+",
    image: riskControlMatrix,
    description:
      "Maps risks to controls and evidence, providing a structured way to assess and monitor risk management and compliance.",
  },
  {
    id: "kpi-management",
    name: "KPI Management",
    platform: "mendix",
    version: "9.24.5",
    downloads: "60+",
    image: kpiManagement,
    description:
      "Manages project submission, validation, and approval with multi-level workflows, role-based access, and audit logs.",
  },
  {
    id: "ideal-track-360",
    name: "Ideal Track 360",
    platform: "mendix",
    version: "9.24.4",
    downloads: "40+",
    image: idealTrack360,
    description:
      "Provides a 360-degree view of organizational activities and processes with centralized data and dashboard analytics.",
  },
  {
    id: "chairman-reports",
    name: "Chairman Reports",
    platform: "mendix",
    version: "9.24.4",
    downloads: "40+",
    image: chairmanReports,
    description:
      "Turns organizational data into executive reports for senior management and leadership review with consolidated dashboards.",
  },
  {
    id: "quorum",
    name: "Quorum",
    platform: "mendix",
    version: "9.24.5",
    downloads: "40+",
    image: quorum,
    description:
      "Manages organizational decision-making and meeting governance with participant tracking, voting, and formal records.",
  },
  {
    id: "petrol-safe-audit",
    name: "Petrol Safe Audit",
    platform: "mendix",
    version: "9.24.4",
    downloads: "60+",
    image: petrolSafeAudit,
    description:
      "Digitizes safety-audit processes for petroleum and industrial environments with inspection, findings, and corrective action tracking.",
  },
  {
    id: "ats",
    name: "ATS",
    platform: "mendix",
    version: "9.24.5",
    downloads: "99+",
    image: ats,
    description:
      "Applicant Tracking System for recruitment, managing candidate information, job postings, and hiring workflows.",
  },
  {
    id: "crm",
    name: "CRM",
    platform: "mendix",
    version: "10.0.0",
    downloads: "30+",
    image: crm,
    description:
      "Customer Relationship Management application for organizations, contacts, leads, and sales activities with role-based access control.",
  },
  {
    id: "digival",
    name: "Digival",
    platform: "mendix",
    version: "9.24.5",
    downloads: "40+",
    image: digival,
    description:
      "Digital validation and approval management for Change Requests with project-based workflows, role-based access, and audit tracking.",
  },
];

// ============================================================
// MAIN PRODUCTS PAGE
// ============================================================

export default function Products() {
  const [platform, setPlatform] = useState<Platform>("polarion");
  const [query, setQuery] = useState("");

  const products =
    platform === "polarion"
      ? POLARION_PRODUCTS
      : MENDIX_PRODUCTS;

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    if (!normalizedQuery) {
      return true;
    }

    return (
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <>
      {/* ====================================================== */}
      {/* PAGE HERO */}
      {/* ====================================================== */}

      <PageHero
        eyebrow="MDIS MarketPlace"
        title={
          <>
            Innovative Digital{" "}
            <span className="text-gold-gradient">
              Solutions Marketplace
            </span>
          </>
        }
        subtitle="Showcasing applications created by MDIS for Polarion ALM and Mendix low-code ecosystems — designed to improve reporting, traceability, compliance, and business workflows."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "MDIS MarketPlace" },
        ]}
      />

      {/* ====================================================== */}
      {/* MARKETPLACE */}
      {/* ====================================================== */}

      <Section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6">

          {/* PLATFORM SWITCHER */}

          <div className="flex flex-col items-center gap-6 text-center">

            <div className="inline-flex gap-1 rounded-full border border-navy/10 bg-white p-1.5 shadow-sm">

              <button
                type="button"
                onClick={() => {
                  setPlatform("polarion");
                  setQuery("");
                }}
                className={`rounded-full px-7 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  platform === "polarion"
                    ? "bg-navy text-goldlight shadow-sm shadow-navy/20"
                    : "text-navy/70 hover:text-navy"
                }`}
              >
                Polarion
              </button>

              <button
                type="button"
                onClick={() => {
                  setPlatform("mendix");
                  setQuery("");
                }}
                className={`rounded-full px-7 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  platform === "mendix"
                    ? "bg-navy text-goldlight shadow-sm shadow-navy/20"
                    : "text-navy/70 hover:text-navy"
                }`}
              >
                Mendix
              </button>

            </div>

            {/* SEARCH */}

            <div className="relative w-full max-w-md">

              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slatey/60" />

              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={`Search ${
                  platform === "polarion"
                    ? "Polarion"
                    : "Mendix"
                } applications...`}
                aria-label={`Search ${
                  platform === "polarion"
                    ? "Polarion"
                    : "Mendix"
                } applications`}
                className="w-full rounded-full border border-navy/15 bg-white px-11 py-3 text-sm text-navy placeholder:text-slatey/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10"
              />

            </div>

          </div>

          {/* RESULT COUNT */}

          <div className="mt-10 flex items-center justify-between">

            <p className="text-sm text-slatey">
              Showing{" "}
              <span className="font-semibold text-navy">
                {filteredProducts.length}
              </span>{" "}
              {platform === "polarion"
                ? "Polarion"
                : "Mendix"}{" "}
              application
              {filteredProducts.length === 1 ? "" : "s"}
            </p>

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-sm font-semibold text-golddeep transition-colors hover:text-gold"
              >
                Clear search
              </button>
            )}

          </div>

          {/* ================================================== */}
          {/* PRODUCT GRID */}
          {/* ================================================== */}

          {filteredProducts.length > 0 ? (

            <div
              key={platform}
              className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >

              {filteredProducts.map((product) => (

                <article
                  key={`${platform}-${product.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-xl"
                >

                  {/* PRODUCT HEADER */}

                  <div className="flex items-center justify-between">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10">
                      <Store className="h-5 w-5 text-golddeep" />
                    </div>

                    <span className="rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-golddeep">
                      {platform === "polarion"
                        ? "POLARION"
                        : "MENDIX"}
                    </span>

                  </div>

                  {/* ================================================== */}
                  {/* PRODUCT IMAGE */}
                  {/* ================================================== */}

                  <div
                    className="
                      mt-4
                      aspect-[3/2]
                      w-full
                      overflow-hidden
                      rounded-xl
                      bg-gradient-to-br
                      from-navy/5
                      to-navy/15
                    "
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} ${product.platform} application`}
                      loading="lazy"
                      className="
                        block
                        h-full
                        w-full
                        object-cover
                        object-center
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* PRODUCT NAME */}

                  <h3 className="mt-5 font-serif text-lg font-semibold text-navy">
                    {product.name}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slatey">
                    {product.description}
                  </p>

                  {/* PRODUCT INFORMATION */}

                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-navy/10 pt-4 text-xs text-slatey">

                    <div className="flex items-center gap-1.5">
                      <Tag className="h-3.5 w-3.5 text-golddeep" />
                      <span>v{product.version}</span>
                    </div>

                    <div className="flex items-center justify-end gap-1.5">
                      <Download className="h-3.5 w-3.5 text-golddeep" />
                      <span>{product.downloads}</span>
                    </div>

                  </div>

                  {/* VIEW MORE */}

                  <Link
                    to={`/products/${product.platform}/${product.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-golddeep transition-colors hover:text-gold"
                  >
                    View More

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                </article>

              ))}

            </div>

          ) : (

            /* ================================================== */
            /* EMPTY SEARCH STATE */
            /* ================================================== */

            <div className="mt-8 rounded-2xl border border-navy/10 bg-white px-6 py-16 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <Search className="h-6 w-6 text-golddeep" />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-semibold text-navy">
                No applications found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slatey">
                We couldn't find any{" "}
                {platform === "polarion"
                  ? "Polarion"
                  : "Mendix"}{" "}
                applications matching your search.
              </p>

              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-goldlight via-gold to-golddeep px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-transform hover:-translate-y-0.5"
              >
                Show All Applications
              </button>

            </div>

          )}

        </div>
      </Section>
    </>
  );
}