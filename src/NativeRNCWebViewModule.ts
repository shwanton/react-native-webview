import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  shouldStartLoadWithLockIdentifier(
    shouldStart: boolean,
    lockIdentifier: Double
  ): void;
  // Android only
  isFileUploadSupported(): Promise<boolean>;
  getCustomCertificateKeychainAlias?(): string | null;
  setCustomCertificateKeychainAlias?(alias: string | null): void;
  // !Android only
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNCWebViewModule');
