import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Search,
  Store,
  Tag,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import { Section } from "@/components/ui";

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

type Platform = "polarion" | "mendix";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  version: string;
  downloads: string;
  platform: Platform;
};

const PRODUCTS: Product[] = [
  // ============================================================
  // POLARION
  // ============================================================

  {
    id: "custom-id-script",
    name: "Custom ID Script",
    description:
      "Automatically creates standardized IDs and titles for Polarion work items, preventing duplicates and improving traceability.",
    image: customIdScript,
    version: "2.4.1",
    downloads: "1.2k",
    platform: "polarion",
  },

  {
    id: "customer-form-extension",
    name: "Customer Form Extension",
    description:
      "Provides a cleaner way to review and summarize work-item and testing information with organized filters and exportable results.",
    image: customerFormExtension,
    version: "1.8.0",
    downloads: "980",
    platform: "polarion",
  },

  {
    id: "workitem-history-trend",
    name: "Workitem History Trend",
    description:
      "Tracks how Polarion work items have changed over time, showing what changed, who changed it, and when.",
    image: workitemHistoryTrend,
    version: "3.1.2",
    downloads: "2.1k",
    platform: "polarion",
  },

  {
    id: "commenting-report",
    name: "Commenting Report",
    description:
      "Collects and presents comments made throughout Polarion project documents in a centralized view for reviews, collaboration, and audits.",
    image: commentingReport,
    version: "1.5.3",
    downloads: "1.5k",
    platform: "polarion",
  },

  {
    id: "cr-lifecycle-report",
    name: "CR Lifecycle Report",
    description:
      "Analyzes the status and age of Change Requests inside Polarion with an interactive dashboard for tracking bottlenecks and trends.",
    image: crLifecycleReport,
    version: "2.0.0",
    downloads: "1.8k",
    platform: "polarion",
  },

  {
    id: "custom-hf-document",
    name: "Custom H&F Document",
    description:
      "Allows Polarion documents to have standardized headers and footers with project metadata, branding, and confidentiality information.",
    image: customHFDocument,
    version: "1.2.4",
    downloads: "740",
    platform: "polarion",
  },

  {
    id: "baseline-reports",
    name: "Baseline Reports",
    description:
      "Compares two different Polarion baselines to show added, removed, and modified artifacts for change control and configuration management.",
    image: baselineReports,
    version: "2.6.1",
    downloads: "1.1k",
    platform: "polarion",
  },

  {
    id: "sdlc-report",
    name: "SDLC Report",
    description:
      "Provides a centralized view of documentation throughout the Software Development Lifecycle with eSignature and approval status tracking.",
    image: sdlcReport,
    version: "4.0.0",
    downloads: "2.4k",
    platform: "polarion",
  },

  {
    id: "dhf-report",
    name: "DHF Report",
    description:
      "Automates the creation of a structured Design History File from Polarion project information for medical-device compliance.",
    image: dhfReport,
    version: "1.9.2",
    downloads: "1.3k",
    platform: "polarion",
  },

  {
    id: "dd-reports",
    name: "DD Reports",
    description:
      "Tracks relationships between documents in Polarion, visualizing parent, derived, and branched documents for better traceability.",
    image: ddReports,
    version: "2.2.0",
    downloads: "1.0k",
    platform: "polarion",
  },

  // ============================================================
  // MENDIX
  // ============================================================

  {
    id: "kpi-management",
    name: "KPI Management",
    description:
      "KPI project management application for submission, validation, and approval with multi-level workflows and automatic project ID generation.",
    image: kpiManagement,
    version: "9.24.5",
    downloads: "60+",
    platform: "mendix",
  },

  {
    id: "crm",
    name: "CRM",
    description:
      "Customer Relationship Management application for organizations, contacts, leads, and sales activities with role-based access control.",
    image: crm,
    version: "10.0.0",
    downloads: "30+",
    platform: "mendix",
  },

  {
    id: "audit-sop",
    name: "Audit SOP",
    description:
      "Digitizes and streamlines audit procedures and SOPs with structured workflows for planning, execution, findings, and reporting.",
    image: auditSop,
    version: "10.0.0",
    downloads: "80+",
    platform: "mendix",
  },

  {
    id: "ohs-navigator",
    name: "OHS Navigator",
    description:
      "Centralized workplace safety management for tracking incidents, hazards, near misses, and safety events with reporting.",
    image: ohsNavigator,
    version: "9.24.5",
    downloads: "60+",
    platform: "mendix",
  },

  {
    id: "learn-pro",
    name: "Learn Pro",
    description:
      "Learning and training management application for organizing courses, content, learner assignments, and progress.",
    image: learnPro,
    version: "10.0.0",
    downloads: "70+",
    platform: "mendix",
  },

  {
    id: "risk-control-matrix",
    name: "Risk Control Matrix",
    description:
      "Risk and control management application that maps risks to controls, evidence, and assessments for compliance and governance.",
    image: riskControlMatrix,
    version: "9.24.4",
    downloads: "70+",
    platform: "mendix",
  },

  {
    id: "ideal-track-360",
    name: "Ideal Track 360",
    description:
      "360-degree business activity tracking and management with centralized data, dashboards, and reporting.",
    image: idealTrack360,
    version: "9.24.4",
    downloads: "40+",
    platform: "mendix",
  },

  {
    id: "chairman-reports",
    name: "Chairman Reports",
    description:
      "Executive reporting application that transforms organizational data into management reports and dashboards for leadership review.",
    image: chairmanReports,
    version: "9.24.4",
    downloads: "40+",
    platform: "mendix",
  },

  {
    id: "quorum",
    name: "Quorum",
    description:
      "Meeting and decision management application for governance, participant tracking, voting, and formal records.",
    image: quorum,
    version: "9.24.5",
    downloads: "40+",
    platform: "mendix",
  },

  {
    id: "petrol-safe-audit",
    name: "Petrol Safe Audit",
    description:
      "Safety auditing application for petroleum and industrial environments with inspection, findings, and corrective action tracking.",
    image: petrolSafeAudit,
    version: "9.24.4",
    downloads: "60+",
    platform: "mendix",
  },

  {
    id: "ats",
    name: "ATS",
    description:
      "Applicant Tracking System for recruitment management, candidate tracking, job postings, and hiring workflows.",
    image: ats,
    version: "9.24.5",
    downloads: "99+",
    platform: "mendix",
  },

  {
    id: "digival",
    name: "Digival",
    description:
      "Digital validation and approval management for Change Requests with project-based workflows and audit tracking.",
    image: digival,
    version: "9.24.5",
    downloads: "40+",
    platform: "mendix",
  },
];

const PLATFORM_LABELS: Record<Platform, string> = {
  polarion: "Polarion",
  mendix: "Mendix",
};

export default function Marketplace() {
  const [activePlatform, setActivePlatform] =
    useState<Platform>("polarion");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      if (product.platform !== activePlatform) {
        return false;
      }

      if (!query) {
        return true;
      }

      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    });
  }, [activePlatform, searchQuery]);

  return (
    <>
      <PageHero
        eyebrow="MDIS MarketPlace"
        title="Innovative Digital Solutions Marketplace"
        subtitle="Explore applications created by MDIS for Polarion ALM and Mendix ecosystems, designed to improve reporting, traceability, compliance, and business workflows."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "MDIS MarketPlace" },
        ]}
      />

      <Section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          {/* ================================================== */}
          {/* INTRO */}
          {/* ================================================== */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-golddeep">
              <span className="h-px w-7 bg-gold/60" />
              Digital Applications
              <span className="h-px w-7 bg-gold/60" />
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              MDIS Application Marketplace
            </h2>

            <p className="mt-4 leading-relaxed text-slatey">
              Discover ready-to-use applications built to extend Polarion
              ALM and Mendix platforms across engineering, compliance,
              reporting, safety, governance, and business operations.
            </p>
          </div>

          {/* ================================================== */}
          {/* PLATFORM SWITCHER */}
          {/* ================================================== */}

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="inline-flex rounded-full border border-navy/10 bg-white p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => {
                  setActivePlatform("polarion");
                  setSearchQuery("");
                }}
                className={`rounded-full px-7 py-2.5 text-sm font-semibold transition-all ${
                  activePlatform === "polarion"
                    ? "bg-navy text-goldlight shadow-sm shadow-navy/20"
                    : "text-navy/70 hover:text-navy"
                }`}
              >
                Polarion
              </button>

              <button
                type="button"
                onClick={() => {
                  setActivePlatform("mendix");
                  setSearchQuery("");
                }}
                className={`rounded-full px-7 py-2.5 text-sm font-semibold transition-all ${
                  activePlatform === "mendix"
                    ? "bg-navy text-goldlight shadow-sm shadow-navy/20"
                    : "text-navy/70 hover:text-navy"
                }`}
              >
                Mendix
              </button>
            </div>

            {/* ================================================== */}
            {/* SEARCH */}
            {/* ================================================== */}

            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slatey/60" />

              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={`Search ${PLATFORM_LABELS[activePlatform]} applications...`}
                aria-label={`Search ${PLATFORM_LABELS[activePlatform]} applications`}
                className="w-full rounded-full border border-navy/15 bg-white px-11 py-3 text-sm text-navy placeholder:text-slatey/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10"
              />
            </div>
          </div>

          {/* ================================================== */}
          {/* RESULT COUNT */}
          {/* ================================================== */}

          <div className="mt-10 flex items-center justify-between">
            <p className="text-sm text-slatey">
              Showing{" "}
              <span className="font-semibold text-navy">
                {filteredProducts.length}
              </span>{" "}
              {PLATFORM_LABELS[activePlatform]} application
              {filteredProducts.length === 1 ? "" : "s"}
            </p>

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
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
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <article
                  key={`${product.platform}-${product.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-xl"
                >
                  {/* Product Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10">
                      <Store className="h-5 w-5 text-golddeep" />
                    </div>

                    <span className="rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-golddeep">
                      {PLATFORM_LABELS[product.platform]}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="mt-4 flex h-36 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-navy/5 to-navy/15 p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Product Name */}
                  <h3 className="mt-5 font-serif text-lg font-semibold text-navy">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slatey">
                    {product.description}
                  </p>

                  {/* Product Information */}
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

                  {/* View More */}
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
                We couldn't find any {PLATFORM_LABELS[activePlatform]}{" "}
                applications matching your search.
              </p>

              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-goldlight via-gold to-golddeep px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-transform hover:-translate-y-0.5"
              >
                Show All Applications
              </button>
            </div>
          )}

          {/* ================================================== */}
          {/* BOTTOM CTA */}
          {/* ================================================== */}

          <div className="mt-16 overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center sm:px-10">
            <div className="pointer-events-none absolute" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-goldlight">
              Need something custom?
            </span>

            <h2 className="mt-4 font-serif text-3xl font-semibold text-parchment">
              Looking for a solution tailored to your workflow?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream/70 sm:text-base">
              Our team can help you design, customize, and integrate digital
              solutions around your organization's specific requirements.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-goldlight via-gold to-golddeep px-7 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-transform hover:-translate-y-0.5"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}