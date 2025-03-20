import NativeRNCWebViewModule from './NativeRNCWebViewModule';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

const shouldStartLoadWithLockIdentifier = (
  shouldStart: boolean,
  lockIdentifier: Double
): void => {
  NativeRNCWebViewModule.shouldStartLoadWithLockIdentifier(
    shouldStart,
    lockIdentifier
  );
};

// no native implementation for iOS, depends only on permissions
const isFileUploadSupported: () => Promise<boolean> = async () => false;

// not supported on ios
const setCustomCertificateKeychainAlias = () => {};
const getCustomCertificateKeychainAlias = () => null;

const WebViewModule = {
  shouldStartLoadWithLockIdentifier,
  isFileUploadSupported,
  setCustomCertificateKeychainAlias,
  getCustomCertificateKeychainAlias,
};

export default WebViewModule;
