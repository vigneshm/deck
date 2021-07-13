const apiHost = import.meta.env.VITE_API_HOST || 'http://localhost:8084';
const atlasWebComponentsUrl = import.meta.env.VITE_ATLAS_WEB_COMPONENTS_URL;
const authEndpoint = import.meta.env.VITE_AUTH_ENDPOINT || apiHost + '/auth/user';
const authEnabled = import.meta.env.VITE_AUTH_ENABLED === 'true';
const bakeryDetailUrl =
  import.meta.env.VITE_BAKERY_DETAIL_URL || apiHost + '/bakery/logs/{{context.region}}/{{context.status.resourceId}}';
const canaryAccount = import.meta.env.VITE_CANARY_ACCOUNT || '';
const canaryEnabled = import.meta.env.VITE_CANARY_ENABLED === 'true';
const canaryFeatureDisabled = import.meta.env.VITE_CANARY_FEATURE_ENABLED !== 'true';
const canaryStagesEnabled = import.meta.env.VITE_CANARY_STAGES_ENABLED === 'true';
const chaosEnabled = import.meta.env.VITE_CHAOS_ENABLED === 'true' ? true : false;
const ciEnabled = import.meta.env.VITE_CI_ENABLED === 'true';
const debugEnabled = import.meta.env.VITE_DEBUG_ENABLED === 'false' ? false : true;
const defaultMetricStore = import.meta.env.VITE_METRIC_STORE || 'atlas';
const displayTimestampsInUserLocalTime = import.meta.env.VITE_DISPLAY_TIMESTAMPS_IN_USER_LOCAL_TIME === 'true';
const dryRunEnabled = import.meta.env.VITE_DRYRUN_ENABLED === 'true' ? true : false;
const entityTagsEnabled = import.meta.env.VITE_ENTITY_TAGS_ENABLED === 'true' ? true : false;
const fiatEnabled = import.meta.env.VITE_FIAT_ENABLED === 'true' ? true : false;
const gceScaleDownControlsEnabled = import.meta.env.VITE_GCE_SCALE_DOWN_CONTROLS_ENABLED === 'true' ? true : false;
const iapRefresherEnabled = import.meta.env.VITE_IAP_REFRESHER_ENABLED === 'true' ? true : false;
const managedDeliveryEnabled = import.meta.env.VITE_MANAGED_DELIVERY_ENABLED === 'true';
const managedServiceAccountsEnabled = import.meta.env.VITE_MANAGED_SERVICE_ACCOUNTS_ENABLED === 'true';
const managedResourcesEnabled = import.meta.env.VITE_MANAGED_RESOURCES_ENABLED === 'true';
const onDemandClusterThreshold = import.meta.env.VITE_ON_DEMAND_CLUSTER_THRESHOLD || '350';
const reduxLoggerEnabled = import.meta.env.VITE_REDUX_LOGGER === 'true';
const templatesEnabled = import.meta.env.VITE_TEMPLATES_ENABLED === 'true';
const useClassicFirewallLabels = import.meta.env.VITE_USE_CLASSIC_FIREWALL_LABELS === 'true';
const functionsEnabled = import.meta.env.VITE_FUNCTIONS_ENABLED === 'true' ? true : false;
const k8sRawResourcesEnabled = import.meta.env.VITE_K8S_RAW_RESOURCES_ENABLED === 'true' ? true : false;

window.spinnakerSettings = {
  authEnabled: authEnabled,
  authEndpoint: authEndpoint,
  authTtl: 600000,
  bakeryDetailUrl: bakeryDetailUrl,
  banners: [],
  canary: {
    atlasWebComponentsUrl: atlasWebComponentsUrl,
    defaultJudge: 'NetflixACAJudge-v1.0',
    featureDisabled: canaryFeatureDisabled,
    metricsAccountName: canaryAccount,
    metricStore: defaultMetricStore,
    reduxLogger: reduxLoggerEnabled,
    showAllConfigs: true,
    stagesEnabled: canaryStagesEnabled,
    storageAccountName: canaryAccount,
    templatesEnabled: templatesEnabled,
  },
  checkForUpdates: true,
  debugEnabled: debugEnabled,
  defaultInstancePort: 80,
  defaultProviders: [
    'appengine',
    'aws',
    'azure',
    'cloudfoundry',
    'dcos',
    'ecs',
    'gce',
    'huaweicloud',
    'kubernetes',
    'oracle',
    'tencentcloud',
  ],
  defaultTimeZone: import.meta.env.TIMEZONE || 'America/Los_Angeles', // see http://momentjs.com/timezone/docs/#/data-utilities/
  disabledImages: [],
  entityTags: {
    maxResults: 5000,
  },
  feature: {
    canary: canaryEnabled,
    chaosMonkey: chaosEnabled,
    ci: ciEnabled,
    displayTimestampsInUserLocalTime: displayTimestampsInUserLocalTime,
    dryRunEnabled: dryRunEnabled,
    entityTags: entityTagsEnabled,
    executionMarkerInformationModal: false,
    fiatEnabled: fiatEnabled,
    iapRefresherEnabled: iapRefresherEnabled,
    managedDelivery: managedDeliveryEnabled,
    managedServiceAccounts: managedServiceAccountsEnabled,
    managedResources: managedResourcesEnabled,
    notifications: false,
    pagerDuty: false,
    pipelineTemplates: false,
    pipelines: true,
    quietPeriod: false,
    roscoMode: false,
    slack: false,
    snapshots: false,
    functions: functionsEnabled,
    kubernetesRawResources: k8sRawResourcesEnabled,
  },
  gateUrl: apiHost,
  gitSources: ['stash', 'github', 'bitbucket', 'gitlab'],
  hiddenStages: [],
  managedDelivery: {
    defaultManifest: 'spinnaker.yml',
    manifestBasePath: '.spinnaker',
  },
  maxPipelineAgeDays: 14,
  newApplicationDefaults: {
    chaosMonkey: false,
  },
  notifications: {
    bearychat: {
      enabled: true,
    },
    email: {
      enabled: true,
    },
    githubStatus: {
      enabled: true,
    },
    googlechat: {
      enabled: true,
    },
    microsoftteams: {
      enabled: true,
    },
    pubsub: {
      enabled: true,
    },
    slack: {
      botName: 'spinnakerbot',
      enabled: true,
    },
    sms: {
      enabled: true,
    },
  },
  onDemandClusterThreshold: Number(onDemandClusterThreshold),
  pollSchedule: 30000,
  providers: {
    appengine: {
      defaults: {
        account: 'my-appengine-account',
      },
    },
    aws: {
      defaults: {
        account: 'test',
        region: 'us-east-1',
        iamRole: 'BaseIAMRole',
      },
      defaultSecurityGroups: [],
      loadBalancers: {
        disableManualOidcDialog: false,
        // if true, VPC load balancers will be created as internal load balancers if the selected subnet has a purpose
        // tag that starts with "internal"
        inferInternalFlagFromSubnet: false,
      },
      serverGroups: {
        enableLaunchTemplates: false,
        enableIPv6: false,
        setIPv6InTest: false,
        enableIMDSv2: false,
        enableCpuCredits: false,
      },
      useAmiBlockDeviceMappings: false,
    },
    azure: {
      defaults: {
        account: 'azure-test',
        region: 'westus',
      },
    },
    cloudfoundry: {
      defaults: {
        account: 'my-cloudfoundry-account',
      },
    },
    dcos: {
      defaults: {
        account: 'my-dcos-account',
      },
    },
    ecs: {
      defaults: {
        account: 'test',
        iamRole: 'BaseIAMRole',
        region: 'us-east-1',
      },
      defaultSecurityGroups: [],
    },
    gce: {
      defaults: {
        account: 'my-google-account',
        instanceTypeStorage: {
          count: 1,
          defaultSettings: {
            disks: [
              {
                sizeGb: 10,
                type: 'pd-ssd',
              },
            ],
          },
          localSSDSupported: false,
          size: 10,
        },
        region: 'us-central1',
        zone: 'us-central1-f',
      },
    },
    huaweicloud: {
      defaults: {
        account: 'default',
        region: 'cn-north-1',
      },
    },
    kubernetes: {},
    oracle: {
      defaults: {
        account: 'DEFAULT',
        bakeryRegions: ['us-phoenix-1'],
        region: 'us-phoenix-1',
      },
    },
    titus: {
      defaults: {
        account: 'titustestvpc',
        iamProfile: '{{application}}InstanceProfile',
        region: 'us-east-1',
      },
    },
    tencentcloud: {
      defaults: {
        account: 'test',
        region: 'ap-guangzhou',
      },
    },
  },
  pagerDuty: {
    required: false,
  },
  slack: {
    baseUrl: 'https://slack.com',
  },
  pubsubProviders: ['amazon', 'google'],
  plugins: [],
  searchVersion: 1,
  triggerTypes: [
    'artifactory',
    'concourse',
    'cron',
    'docker',
    'git',
    'helm',
    'jenkins',
    'nexus',
    'pipeline',
    'plugin',
    'pubsub',
    'travis',
    'webhook',
    'wercker',
  ],
  useClassicFirewallLabels: useClassicFirewallLabels,
};
