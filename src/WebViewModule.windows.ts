// not supported on windows
const shouldStartLoadWithLockIdentifier = (): void => {};

// not supported on windows
const isFileUploadSupported: () => Promise<boolean> = async () => false;

// not supported on windows
const setCustomCertificateKeychainAlias = () => {};
const getCustomCertificateKeychainAlias = () => null;

const WebViewModule = {
  shouldStartLoadWithLockIdentifier,
  isFileUploadSupported,
  setCustomCertificateKeychainAlias,
  getCustomCertificateKeychainAlias,
};

export default WebViewModule;
