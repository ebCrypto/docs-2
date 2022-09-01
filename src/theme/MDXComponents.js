import React from 'react';

import MDXComponents from '@theme-original/MDXComponents';
import ReqsSys from '@site/src/components/partials/reqs-sys';
import ReqsKernel from '@site/src/components/partials/reqs-kernel';
import AutoHostendpointsMigrate from '@site/src/components/partials/auto-hostendpoints-migrate';
import HostEndpointsUpgrade from '@site/src/components/partials/hostendpoints-upgrade';
import EnterpriseLink from '@site/src/components/partials/enterprise-link';
import InstallOpenshiftBeforeYouBegin from '@site/src/components/partials/install-openshift-before-you-begin';
import CalicoWindowsInstall from '@site/src/components/partials/calico-windows-install';
import PodCidrSed from '@site/src/components/partials/pod-cidr-sed';
import EnvironmentFile from '@site/src/components/partials/environment-file';
import ConfigureManagedCluster from '@site/src/components/partials/configure-managed-cluster';
import InstallAKS from '@site/src/components/partials/install-aks';
import InstallGeneric from '@site/src/components/partials/install-generic';

export default {
  // Re-use the default mapping
  ...MDXComponents,

  // all of our partials
  ReqsSys,
  ReqsKernel,
  HostEndpointsUpgrade,
  EnterpriseLink,
  InstallOpenshiftBeforeYouBegin,
  CalicoWindowsInstall,
  PodCidrSed,
  EnvironmentFile,
  AutoHostendpointsMigrate,
  ConfigureManagedCluster,
  InstallAKS,
  InstallGeneric,
};
