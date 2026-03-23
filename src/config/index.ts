import { SiteConfig } from "./types";
import { simonCPAsConfig } from "./simon-cpas";
import { orlandElectricConfig } from "./orland-electric";
import { retireMaxConfig } from "./retiremax-insurance";
import { bostonAbConfig } from "./boston-ab";
import { bostonHarborWaterConfig } from "./boston-harbor-water";
import { certifiedTreeConfig } from "./certified-tree";
import { cjTreeServicesConfig } from "./cj-tree-services";
import { bostonPaintConfig } from "./boston-paint";
import { excelElectricConfig } from "./excel-electric";
import { proElectricConfig } from "./pro-electric";
import { aplusElectricalConfig } from "./aplus-electrical";
import { armorGarageDoorsConfig } from "./armor-garage-doors";
import { stephcoCleaningConfig } from "./stephco-cleaning";
import { kjHeatCoolConfig } from "./kj-heatcool";
import { avidEngineersConfig } from "./avid-engineers";

const configs: Record<string, SiteConfig> = {
  "simon-cpas": simonCPAsConfig,
  "orland-electric": orlandElectricConfig,
  "retiremax-insurance": retireMaxConfig,
  "boston-ab": bostonAbConfig,
  "boston-harbor-water": bostonHarborWaterConfig,
  "certified-tree": certifiedTreeConfig,
  "cj-tree-services": cjTreeServicesConfig,
  "boston-paint": bostonPaintConfig,
  "excel-electric": excelElectricConfig,
  "pro-electric": proElectricConfig,
  "aplus-electrical": aplusElectricalConfig,
  "armor-garage-doors": armorGarageDoorsConfig,
  "stephco-cleaning": stephcoCleaningConfig,
  "kj-heatcool": kjHeatCoolConfig,
  "avid-engineers": avidEngineersConfig,
};

const slug = process.env.NEXT_PUBLIC_SITE_CONFIG || "simon-cpas";
export const siteConfig: SiteConfig = configs[slug] || simonCPAsConfig;
